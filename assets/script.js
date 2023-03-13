// variables for the procedure (did not end up using all)
var codingQuizBox = document.getElementById(".codingQuizBox");
var startButton = document.getElementById("#startButton");
var questionTitle = document.getElementById(".questionTitle");
var questionButtons = document.getElementById(".questionButton");
var timer = document.getElementById(".timer");
var remainingTime = document.getElementById("remainingTime")
var next = document.getElementById("#advance");
var question1 = document.getElementById("#question1");
var question2 = document.getElementById("#question2");
var question3 = document.getElementById("#question3");
var question4 = document.getElementById("#question4");
var question5 = document.getElementById("#question5");
var countdown = document.querySelector(".countdown");
var score = countdown.textContent;
var index = 0
var timer = 90
var scores = []
var clockid

// this is where we get scores from local storage, parse them, and assign the stored scores to the global scores value
// we need to wrap the scores in 31 in an if statement regarding if the storage is not null 


// click event calls the function that we will use to start the game. For each eveht that follows, even this, we need an if and else statement to trigger text that comes up and also a deduction in time if applicable. 
document.getElementById("startButton").onclick = function () { startQuiz() };
function startQuiz() {
  document.getElementById("question1").style.display = "block";
  document.getElementById("codingQuizBox").style.display = "none";
  document.getElementById("highScoreLink").style.display = "hidden";
  clockid = setInterval(showtime, 1000)
}
// END OF codingQuizBox

// When user clicks the correct answer, message pops up, along with next button. When user clicks any other answer, alternate message appears
document.getElementById("correct1").onclick = function () { correctOne() };
function correctOne() {
  document.getElementById("correct1").style.backgroundColor = "lightblue";
  document.getElementById("correctMessage").style.display = "block";
  document.getElementById("advance1").style.display = "flex";
  // document.querySelectorAll(".wrong").forEach(wrong => wrong.disabled = true);
}

document.getElementsByClassName("wrong").onclick = function () { wrongOne() };
function wrong() {
  document.getElementById("wrongMessage").style.display = "block";
  document.getElementById("advance1").style.display = "flex";
  document.getElementById("correct1").style.backgroundColor = "lightblue";
  // timer is taking variable of timer and subtract 10 seconds from that
  timer = timer - 10;
}

// END OF QUESTION ONE
// transition script from question 1 to 2 based on advance on click function
document.getElementById("advance1").onclick = function () { transition() };
function transition() {
  document.getElementById("question2").style.display = "block";
  document.getElementById("question1").style.display = "none";
  document.getElementById("advance1").style.display = "none";
  document.getElementById("wrongMessage").style.display = "none";
  document.getElementById("correctMessage").style.display = "none";

}
//start of question 2 script
document.getElementById("correct2").onclick = function () { correctTwo() };
function correctTwo() {
  document.getElementById("correctMessage2").style.display = "block";
  document.getElementById("advance2").style.display = "flex";
  document.getElementById("correct2").style.backgroundColor = "lightblue";
}

document.getElementsByClassName("wrong2").onclick = function () { wrongTwo() };
function wrong2() {
  document.getElementById("wrongMessage2").style.display = "block";
  document.getElementById("advance2").style.display = "flex";
  document.getElementById("correct2").style.backgroundColor = "lightblue";
  // timer is taking variable of timer and subtract 10 seconds from that
  timer = timer - 10;
}

// END OF QUESTION 2
// transition to question 3
document.getElementById("advance2").onclick = function () { transitionTwo() };
function transitionTwo() {
  document.getElementById("question3").style.display = "block";
  document.getElementById("question2").style.display = "none";
  document.getElementById("advance2").style.display = "none";
  document.getElementById("wrongMessage2").style.display = "none";
  document.getElementById("correctMessage2").style.display = "none";
}

// start of question 3 script
document.getElementById("correct3").onclick = function () { correctThree() };
function correctThree() {
  document.getElementById("correctMessage3").style.display = "block";
  document.getElementById("advance3").style.display = "flex";
  document.getElementById("correct3").style.backgroundColor = "lightblue";
}

document.getElementsByClassName("wrong3").onclick = function () { wrongThree() };
function wrong3() {
  document.getElementById("wrongMessage3").style.display = "block";
  document.getElementById("advance3").style.display = "flex";
  document.getElementById("correct3").style.backgroundColor = "lightblue";
  // timer is taking variable of timer and subtract 10 seconds from that
  timer = timer - 10;
}

// END OF QUESTION 3
// transition to question 4
document.getElementById("advance3").onclick = function () { transitionThree() };
function transitionThree() {
  document.getElementById("question4").style.display = "block";
  document.getElementById("question3").style.display = "none";
  document.getElementById("advance3").style.display = "none";
  document.getElementById("wrongMessage3").style.display = "none";
  document.getElementById("correctMessage3").style.display = "none";
}

// start of question 3 script
document.getElementById("correct4").onclick = function () { correctFour() };
function correctFour() {
  document.getElementById("correctMessage4").style.display = "block";
  document.getElementById("advance4").style.display = "flex";
  document.getElementById("correct4").style.backgroundColor = "lightblue";
}

document.getElementsByClassName("wrong4").onclick = function () { wrongFour() };
function wrong4() {
  document.getElementById("wrongMessage4").style.display = "block";
  document.getElementById("advance4").style.display = "flex";
  document.getElementById("correct4").style.backgroundColor = "lightblue";
  // timer is taking variable of timer and subtract 10 seconds from that
  timer = timer - 10;
}

// END OF QUESTION 4
// transition to question 5
document.getElementById("advance4").onclick = function () { transitionFour() };
function transitionFour() {
  document.getElementById("question5").style.display = "block";
  document.getElementById("question4").style.display = "none";
  document.getElementById("advance4").style.display = "none";
  document.getElementById("wrongMessage4").style.display = "none";
  document.getElementById("correctMessage4").style.display = "none";
}

//start of question 3 script
document.getElementById("correct5").onclick = function () { correctFive() };
function correctFive() {
  document.getElementById("correctMessage5").style.display = "block";
  document.getElementById("advance5").style.display = "flex";
  document.getElementById("correct5").style.backgroundColor = "lightblue";
}

document.getElementsByClassName("wrong5").onclick = function () { wrongFive() };
function wrong5() {
  document.getElementById("wrongMessage5").style.display = "block";
  document.getElementById("advance5").style.display = "flex";
  document.getElementById("correct5").style.backgroundColor = "lightblue";
  // timer is taking variable of timer and subtract 10 seconds from that
  timer = timer - 10;
}

// END OF QUESTION 5 and other questions
// transition to all done section by clicking advance button
document.getElementById("advance5").onclick = function () { quizDone() };
function quizDone() {
  document.getElementById("initials").style.display = "flex";
  document.getElementById("submitInitials").style.display = "block";
  document.getElementById("question5").style.display = "none";
  document.getElementById("advance5").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("wrongMessage5").style.display = "none";
  document.getElementById("correctMessage5").style.display = "none";
  // modified this to add a second, since it was pulling in a second less than actual time
  document.getElementById("remainingTime").innerHTML = timer + 1;
  // time needs to stop
  clearInterval(clockid);
}

function showtime() {
  if (timer == 0) {
    document.getElementById("initials").style.display = "flex";
    document.getElementById("advance1").style.display = "none";
    document.getElementById("advance2").style.display = "none";
    document.getElementById("advance3").style.display = "none";
    document.getElementById("advance4").style.display = "none";
    document.getElementById("advance5").style.display = "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("codingQuizBox").style.display = "none";
    document.getElementById("remainingTime").innerHTML = score;
    // stops timer at 0
    clearInterval(clockid);
  }
  countdown.textContent = timer;
  timer = timer - 1
}

// This section for after the scores are submitted, clock should still be frozen at this point.
var submittedInitials = document.getElementById("userInitials");
var listofInitials = document.getElementById("orderedList");
var submittedScore = score;

// local storage must be in the form of a string. to convert to a string. use stringify.to retreive from local storage to the original array, you must parse it
var highScoreArray = JSON.parse(localStorage.getItem("highScoresStored")) || []
document.getElementById("submitInitials").onclick = function () {

  var displayString = "Initials: " + submittedInitials.value + " " + " " + "|" + " " + "Score: " + timer;

  highScoreArray.push(displayString)
  localStorage.setItem("highScoresStored", JSON.stringify(highScoreArray));
  console.log(localStorage);

  for (let index = 0; index < highScoreArray.length; index++) {
    const displayString= highScoreArray[index];
    showScores(displayString)
  }

 

};



function showScores(displayString) {
  var text = userInitials.value;
  var submittedScore = countdown.textContent;
  var li = document.createElement("li");
  li.innerHTML = displayString;
  listofInitials.appendChild(li);
  document.getElementById("scoreCard").style.display = "flex";
  document.getElementById("initials").style.display = "none";

  // build score object with initials and score value (use 224 and 225)
  // next push score object onto the scores array 
  // we must stringify the scores, because only string can be in local storage
  // string can be put in local storage
  var highScoresStored = document.getElementById("scoreCard");

}



// this section should reset everything, including the timer to start at 0 again
// this section needs to incite a complete reset of everything upon the pressing of the "tryAgain" button
document.getElementById("tryAgain").onclick = function () { home() };
function home() {
  document.getElementById("codingQuizBox").style.display = "flex";
  document.getElementById("timer").style.display = "block";
  document.getElementById("highScoreLink").style.display = "block";
  document.getElementById("scoreCard").style.display = "none";
  document.getElementById("correct1").style.removeProperty("background-color");
  document.getElementById("correct2").style.removeProperty("background-color");
  document.getElementById("correct3").style.removeProperty("background-color");
  document.getElementById("correct4").style.removeProperty("background-color");
  document.getElementById("correct5").style.removeProperty("background-color");
  timer = 90;
  index = 0;

  startQuiz();
}

document.getElementById("clearScores").onclick = function() {
localStorage.clear();
listofInitials.textContent="";
}



// if user clicks on "View High Scores" all will vanish except for "scoreCard". 
document.getElementById("highScoreLink").addEventListener("click", viewHighScores);
function viewHighScores() {
  document.getElementById("scoreCard").style.display = "flex";
  document.getElementById("highScoreLink").style.display = "none";
  document.getElementById("codingQuizBox").style.display = "none";
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "none";
  document.getElementById("timer").style.display = "none";
}