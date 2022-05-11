//elements/variables/objects
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var sectionEl = document.querySelector("#feedback");
var startBtn = document.querySelector("#startBtn");
var finalPage = document.querySelector("#final-content");
var scoreSection = document.querySelector("#score-section");
var timeInterval;
var submitBtn = document.querySelector("#submitBtn");
var initialsEl = document.querySelector("#initials");
var timeLeft = 60;
var userScores = [];

var questionsObj = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. Javascript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console.log",
    ],
    correct: "4. Console.log",
  },
  {
    question: "Commonly used data types do NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correct: "3. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: [
      "1. Quotes",
      "2. Curly brackets",
      "3. Parenthesis",
      "4. Square brackets",
    ],
    correct: "3. Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answers: [
      "1. Numbers and strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correct: "4. All of the Above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to values.",
    answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    correct: "3. Quotes",
  },
];

//functions

function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      alert("Time has ended. Quiz is over.");
      window.location.href = "highscores.html";
    }
  }, 1000);
}

var questionOne = function () {
  mainEl.textContent = "";
  var question1 = document.createElement("h3");
  question1.textContent = questionsObj[0].question;
  mainEl.appendChild(question1);

  questionsObj[0].answers.forEach(function (answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[0].correct) {
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }

      question1.remove();
      mainEl.textContent = "";
      questionTwo();
    };
    mainEl.appendChild(answerBtnEl);
  });
};

var questionTwo = function () {
  var question2 = document.createElement("h3");
  question2.textContent = questionsObj[1].question;
  mainEl.appendChild(question2);

  questionsObj[1].answers.forEach(function (answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[1].correct) {
        sectionEl.textContent = "";
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question2.remove();
      mainEl.textContent = "";
      questionThree();
    };
    mainEl.appendChild(answerBtnEl);
  });
};

var questionThree = function () {
  var question3 = document.createElement("h3");
  question3.textContent = questionsObj[2].question;
  mainEl.appendChild(question3);

  questionsObj[2].answers.forEach(function (answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[2].correct) {
        sectionEl.textContent = "";
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question3.remove();
      mainEl.textContent = "";
      questionFour();
    };
    mainEl.appendChild(answerBtnEl);
  });
};

var questionFour = function () {
  var question4 = document.createElement("h3");
  question4.textContent = questionsObj[3].question;
  mainEl.appendChild(question4);

  questionsObj[3].answers.forEach(function (answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[3].correct) {
        var alertWrong = document.createElement("p");
        sectionEl.textContent = "";
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question4.remove();
      mainEl.textContent = "";
      questionFive();
    };
    mainEl.appendChild(answerBtnEl);
  });
};

var questionFive = function () {
  var question5 = document.createElement("h3");
  question5.textContent = questionsObj[4].question;
  mainEl.appendChild(question5);

  questionsObj[4].answers.forEach(function (answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[4].correct) {
        sectionEl.textContent = "";
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question5.remove();
      mainEl.textContent = "";
      sectionEl.textContent = "";
      finishedQuiz();
    };
    mainEl.appendChild(answerBtnEl);
  });
};

function finishedQuiz() {
  clearInterval(timeInterval);
  timerEl.remove();
  mainEl.remove();

  finalPage.removeAttribute("class", "hide");
  finalPage.setAttribute("class", "final-content");

  var finalScoreText = document.createElement("p");
  finalScoreText.innerHTML = "Your score is " + timeLeft + ".";
  finalScoreText.className = "final-paragraph";
  scoreSection.appendChild(finalScoreText);
}

function saveScores() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    var userScores = {
      initials: initials,
      score: timeLeft,
    };
    highScores.push(userScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  } else {
    alert("You must enter your initials!");
    return;
  }
  window.location.href = "highscores.html";
}

function startQuiz() {
  countdown();
  questionOne();
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveScores();
  }
}

submitBtn.addEventListener("click", saveScores);

startBtn.addEventListener("click", startQuiz);

initialsEl.onkeyup = checkForEnter;
