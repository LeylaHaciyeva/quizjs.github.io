"use strict";

var startBtn = document.querySelector(".start_btn");
var quizInfo = document.querySelector(".quiz-info");
var rules = document.querySelector(".rules");
var contuineBtn = document.querySelector(".contiune_btn");
var exitBtn = document.querySelector(".exit_btn");
var que_count = 0;
var nextBtn = document.querySelector(".next_btn");
var options = document.querySelector(".options");
var question = document.querySelector(".question");
var time = document.querySelector(".time");
var total = document.querySelector(".count");
var totalDiv = document.querySelector(".total-div");
var sec = 10;
var timer;
var score = 0;
var optionLi;
var questions = [{
  numb: 1,
  question: "Who am I?",
  answer: "Front end developer",
  options: ["Back end developer", "Teacher", "Doctor", "Front end developer"]
}, {
  numb: 2,
  question: "How old am I?",
  answer: "21",
  options: ["21", "90", "32", "19"]
}, {
  numb: 3,
  question: "Where do i study?",
  answer: "ASOIU",
  options: ["ASOIU", "ADA", "BANM", "ATU"]
}];
startBtn.addEventListener("click", function () {
  rules.classList.add("active");
  this.style.display = "none";
});
contuineBtn.addEventListener("click", function () {
  rules.classList.remove("active");
  quizInfo.classList.add("active");
  showQuestions();
});
exitBtn.addEventListener("click", function () {
  rules.classList.remove("active");
  startBtn.style.display = "block";
});

function showQuestions() {
  question.innerHTML = questions[que_count].numb + "." + questions[que_count].question;
  options.innerHTML = "\n    a)<li class=\"option_li\">".concat(questions[que_count].options[0], "</li>\n    b)<li class=\"option_li\">").concat(questions[que_count].options[1], "</li>\n    c)<li class=\"option_li\">").concat(questions[que_count].options[2], "</li>\n    d)<li class=\"option_li\">").concat(questions[que_count].options[3], "</li>\n    ");
  optionLi = options.querySelectorAll(".option_li");

  for (var i = 0; i < optionLi.length; i++) {
    optionLi[i].setAttribute("onClick", "optionSelected(this)");
  }

  timer = setInterval(function () {
    if (sec > 0) {
      sec = sec - 1;
      time.textContent = sec;
    } else if (sec <= 0) {
      nextFunc();
    }
  }, 1000);
}

function optionSelected(answer) {
  var allOptions = options.children.length;

  if (answer.textContent == questions[que_count].answer) {
    answer.classList.add("correct");
    score++;
  } else {
    answer.classList.add("incorrect");
  }

  for (var i = 0; i < allOptions; i++) {
    options.children[i].classList.add("disabled");
  }
}

quizCounter();
nextBtn.addEventListener("click", nextFunc = function nextFunc() {
  clearInterval(timer);
  sec = 10;

  if (que_count < questions.length - 1) {
    que_count++;
    showQuestions();
    quizCounter();
  } else {
    quizInfo.style.display = "none";
    totalDiv.style.display = "flex";
    total.textContent = score;
  }
});

function quizCounter() {
  var quizQue = document.querySelector(".quiz_que");
  quizQue.innerHTML = questions[que_count].numb + " of " + questions.length;
}