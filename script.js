let startBtn = document.querySelector(".start_btn")
let quizInfo = document.querySelector(".quiz-info")
let rules = document.querySelector(".rules")
let contuineBtn = document.querySelector(".contiune_btn")
let exitBtn = document.querySelector(".exit_btn")
let que_count = 0
let nextBtn = document.querySelector(".next_btn")
let options = document.querySelector(".options")
let question = document.querySelector(".question")
let time = document.querySelector(".time")
let total = document.querySelector(".count")
let totalDiv = document.querySelector(".total-div")

let sec = 10;
let timer;
let score = 0
let optionLi
let questions = [
    {
        numb: 1,
        question: "Who am I?",
        answer: "Front end developer",
        options: [
            "Back end developer",
            "Teacher",
            "Doctor",
            "Front end developer"
        ]
    },
    {
        numb: 2,
        question: "How old am I?",
        answer: "21",
        options: [
            "21",
            "90",
            "32",
            "19"
        ]
    },
    {
        numb: 3,
        question: "Where do i study?",
        answer: "ASOIU",
        options: [
            "ASOIU",
            "ADA",
            "BANM",
            "ATU"
        ]
    },
]

startBtn.addEventListener("click", function () {
    rules.classList.add("active")
    this.style.display = "none"
})

contuineBtn.addEventListener("click", function () {
    rules.classList.remove("active")
    quizInfo.classList.add("active")
    showQuestions()
})

exitBtn.addEventListener("click", function () {
    rules.classList.remove("active")
    startBtn.style.display = "block"
})
function showQuestions() {
    question.innerHTML = questions[que_count].numb + "." + questions[que_count].question
    options.innerHTML = `
    a)<li class="option_li">${questions[que_count].options[0]}</li>
    b)<li class="option_li">${questions[que_count].options[1]}</li>
    c)<li class="option_li">${questions[que_count].options[2]}</li>
    d)<li class="option_li">${questions[que_count].options[3]}</li>
    `
    optionLi = options.querySelectorAll(".option_li")
    for (let i = 0; i < optionLi.length; i++) {
        optionLi[i].setAttribute("onClick", "optionSelected(this)")
    }

    timer = setInterval(() => {
        if (sec > 0) {
            sec = sec - 1
            time.textContent = sec
        }
        else if (sec <= 0) {
            nextFunc()
        }
    }, 1000);

}
function optionSelected(answer) {
    let allOptions = options.children.length
    if (answer.textContent == questions[que_count].answer) {
        answer.classList.add("correct")
        score++
    } else {
        answer.classList.add("incorrect")
    }
    for (let i = 0; i < allOptions; i++) {
        options.children[i].classList.add("disabled")
    }
}
quizCounter()




nextBtn.addEventListener("click", nextFunc = () => {
    clearInterval(timer)
    sec = 10;
    if (que_count < questions.length - 1) {
        que_count++
        showQuestions()
        quizCounter()
    }
    else {
        quizInfo.style.display = "none"
        totalDiv.style.display = "flex"
        total.textContent = score
    }

})

function quizCounter() {
    let quizQue = document.querySelector(".quiz_que")
    quizQue.innerHTML = questions[que_count].numb + " of " + questions.length
}

