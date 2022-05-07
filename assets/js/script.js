var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");


var mainHeader = document.createElement("h2");
mainHeader.textContent = "Coding Quiz Challenge";
mainEl.appendChild(mainHeader);

var mainText = document.createElement("p");
mainText.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
mainEl.appendChild(mainText);

var startBtn = document.createElement("button");
startBtn.textContent = "Start Quiz";
startBtn.className = "start-btn";
mainEl.appendChild(startBtn);

var questionOne = function() {
    var question1El = document.createElement("div")
    question1El.className = "question-header"
    mainEl.appendChild(question1El);
    var question1 = document.createElement("h3")
    question1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    question1El.appendChild(question1);
    var q1Answer1 = document.createElement("button");
    q1Answer1.textContent= "1. Javascript";
    q1Answer1.className = "answer-buttons";
    question1El.appendChild(q1Answer1);
    var q1Answer2 = document.createElement("button");
    q1Answer2.textContent= "2. Terminal/Bash";
    q1Answer2.className = "answer-buttons";
    question1El.appendChild(q1Answer2);
    var q1Answer3 = document.createElement("button");
    q1Answer3.textContent= "3. For Loops";
    q1Answer3.className = "answer-buttons";
    question1El.appendChild(q1Answer3);
    var q1Answer4 = document.createElement("button");
    q1Answer4.textContent= "4. Console.log";
    q1Answer4.className = "answer-buttons";
    question1El.appendChild(q1Answer4);

    q1Answer1.addEventListener("click", function() {
        if (true) {
            alert("wrong");
            mainEl.textContent = "";
            questionTwo();
        }
    });

    q1Answer2.addEventListener("click", function() {
        if (true) {
            alert("wrong");
            mainEl.textContent = "";
            questionTwo();
        }
    });

    q1Answer3.addEventListener("click", function() {
        if (true) {
            alert("wrong");
            mainEl.textContent = "";
            questionTwo();
        }
    });

    q1Answer4.addEventListener("click", function() {
        if (true) {
            alert("correct!");
            mainEl.textContent = "";
            questionTwo();
        }
    });

}

var questionTwo = function() {
    var question2El = document.createElement("div")
    question2El.className = "question-header"
    mainEl.appendChild(question2El);
    var question2 = document.createElement("h3")
    question2.textContent = "Commonly used data types do NOT include:";
    question2El.appendChild(question2);
    var q2Answer1 = document.createElement("button");
    q2Answer1.textContent= "1. Strings";
    q2Answer1.className = "answer-buttons";
    question2El.appendChild(q2Answer1);
    var q2Answer2 = document.createElement("button");
    q2Answer2.textContent= "2. Boolean";
    q2Answer2.className = "answer-buttons";
    question2El.appendChild(q2Answer2);
    var q2Answer3 = document.createElement("button");
    q2Answer3.textContent= "3. Alerts";
    q2Answer3.className = "answer-buttons";
    question2El.appendChild(q2Answer3);
    var q2Answer4 = document.createElement("button");
    q2Answer4.textContent= "4. Numbers";
    q2Answer4.className = "answer-buttons";
    question2El.appendChild(q2Answer4);
}

var questionThree = function() {
    var question3El = document.createElement("div")
    question3El.className = "question-header"
    mainEl.appendChild(question3El);
    var question3 = document.createElement("h3")
    question3.textContent = "The condition in an if/else statement is enclosed with _____.";
    question3El.appendChild(question3);
    var q3Answer1 = document.createElement("button");
    q3Answer1.textContent= "1. Quotes";
    q3Answer1.className = "answer-buttons";
    question3El.appendChild(q3Answer1);
    var q3Answer2 = document.createElement("button");
    q3Answer2.textContent= "2. Curly Brackets";
    q3Answer2.className = "answer-buttons";
    question3El.appendChild(q3Answer2);
    var q3Answer3 = document.createElement("button");
    q3Answer3.textContent= "3. Parenthesis";
    q3Answer3.className = "answer-buttons";
    question3El.appendChild(q3Answer3);
    var q3Answer4 = document.createElement("button");
    q3Answer4.textContent= "4. Square Brackets";
    q3Answer4.className = "answer-buttons";
    question3El.appendChild(q3Answer4);
}

var questionFour = function() {
    var question4El = document.createElement("div")
    question4El.className = "question-header"
    mainEl.appendChild(question4El);
    var question4 = document.createElement("h3")
    question4.textContent = "Arrays in Javascript can be used to store _____.";
    question4El.appendChild(question4);
    var q4Answer1 = document.createElement("button");
    q4Answer1.textContent= "1. Numbers and Strings";
    q4Answer1.className = "answer-buttons";
    question4El.appendChild(q4Answer1);
    var q4Answer2 = document.createElement("button");
    q4Answer2.textContent= "2. Other arrays";
    q4Answer2.className = "answer-buttons";
    question4El.appendChild(q4Answer2);
    var q4Answer3 = document.createElement("button");
    q4Answer3.textContent= "3. Booleans";
    q4Answer3.className = "answer-buttons";
    question4El.appendChild(q4Answer3);
    var q4Answer4 = document.createElement("button");
    q4Answer4.textContent= "4. All of the Above";
    q4Answer4.className = "answer-buttons";
    question4El.appendChild(q4Answer4);
}

var questionFive = function() {
    var question5El = document.createElement("div")
    question5El.className = "question-header"
    mainEl.appendChild(question5El);
    var question5 = document.createElement("h3")
    question5.textContent = "String values must be enclosed within _____ when being assigned to values.";
    question5El.appendChild(question5);
    var q5Answer1 = document.createElement("button");
    q5Answer1.textContent= "1. Commas";
    q5Answer1.className = "answer-buttons";
    question5El.appendChild(q5Answer1);
    var q5Answer2 = document.createElement("button");
    q5Answer2.textContent= "2. Curly Brackets";
    q5Answer2.className = "answer-buttons";
    question5El.appendChild(q5Answer2);
    var q5Answer3 = document.createElement("button");
    q5Answer3.textContent= "3. Quotes";
    q5Answer3.className = "answer-buttons";
    question5El.appendChild(q5Answer3);
    var q5Answer4 = document.createElement("button");
    q5Answer4.textContent= "4. Parenthesis";
    q5Answer4.className = "answer-buttons";
    question5El.appendChild(q5Answer4);
}

// questionArray = [questionOne(), questionTwo()];
// for (var i = 0; i < questionArray.length; i++) {
//     console.log(questionArray);
// }



function sortQuestions() {
    mainEl.textContent = "";
    questionOne();

}

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            alert("Time has ended. Quiz is over.")
        }
    }, 1000);

}


function startQuiz() {
    console.log("click")
    sortQuestions();
    countdown();
}



startBtn.addEventListener("click", startQuiz);



