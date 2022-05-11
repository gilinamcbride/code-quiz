var goBackBtn = document.querySelector("#go-back-btn");
var clearBtn = document.querySelector("#clear-scores-btn");
var scoreListEl = document.querySelector(".score-initials");

function goBack() {
  (window.location.href = "index.html"), true;
}

goBackBtn.addEventListener("click", goBack);

function retrieveScores() {
  var userData = JSON.parse(localStorage.getItem("highScores")) || [];
  for (var i = 0; i < userData.length; i++) {
    var scoreListItem = document.createElement("p");
    scoreListItem.className = "scores-list";
    scoreListItem.textContent = userData[i].initials + ": " + userData[i].score;
    scoreListEl.appendChild(scoreListItem);
  }
}
retrieveScores();

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  scoreListEl.remove();
});
