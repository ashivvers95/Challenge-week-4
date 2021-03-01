var timeInterval = document.querySelector("#time-interval");
var startButton = document.querySelector("#start-button");
var displayQuestions = document.querySelector("#display-questions");
var displayChoices = document.querySelector("#display-choices");
var timeLeft = 100;
var questionClick = 0;
var questions = [
  {
    question: "What do we use to leave information in the console?",
    choices: ["function", "var", "let", "console"],
    answer: "console",
  },
  {
    question: "How do we access the console?",
    choices: [
      "dev tools",
      "vs",
      "the right attitude",
      "obtain a backstage pass",
    ],
    answer: "dev tools",
  },
  {
    question: "How do we access dev tools?",
    choices: [
      "want it really bad",
      "click with intent",
      "right click and pick inspect",
      "right click and select dev tools",
    ],
    answer: "right click and pick inspect",
  },
  {
    question: "Which of the following refer to true and false?",
    choices: ["numbers", "boolean", "string", "array"],
    answer: "boolean",
  },
];

function startQuiz(questionsObject) {
  
  console.log(questionsObject);
      //pull questions from array and display
   populateQuestion();
   displayChoices.addEventListener("click", function(){checkAnswer(event)});
   countDown();
  }

function populateQuestion () {
    displayQuestions.innerHTML= questions[questionClick].question;
    for (var h = 0; h < questions[questionClick].choices.length; h++) {
        var questionButton = document.createElement("button");
        questionButton.classList.add('choices')
        questionButton.innerHTML = questions[questionClick].choices[h];
        displayChoices.appendChild(questionButton);
      }
}

function countDown() {
    
  var timeText = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
        console.log(timeLeft)
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeInterval.innerHTML = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
      
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timeInterval.innerHTML= timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timeInterval.innerHTML = "";
      // Use `clearInterval()` to stop the timer
    }
  }, 1000);
}

//questions array to iterate over in startQuiz function

 function checkAnswer(event) {

  if (event.target.innerHTML !== (questions[questionClick].answer)){
    timeLeft =- 10;
    countDown();
  }
  questionClick++;
  displayChoices.innerHTML = "";
  displayQuestions.innerHTML = "";
  populateQuestion();
  

}

startButton.addEventListener("click", function(){startQuiz(questions)});
