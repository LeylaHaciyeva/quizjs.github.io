// let questions = [
//     {
//         numb: 1,
//         question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
//         answer: "Lorem ipsum dolor",
//         options: [
//             "shjdkghkjfdg",
//             "sdfsdfsdf",
//             "Sdfsdfsdf",
//             "Lorem ipsum dolor"
//         ]
//     },
//     {
//         numb: 2,
//         question: "Lorem ipsum adipisicing elit?",
//         answer: "Lorem ipsum dolor",
//         options: [
//             "shjdkghkjfdg",
//             "sdfsdfsdf",
//             "Sdfsdfsdf",
//             "Lorem ipsum dolor"
//         ]
//     },
//     {
//         numb: 3,
//         question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
//         answer: "Lorem ipsum dolor",
//         options: [
//             "shjdkghkjfdg",
//             "sdfsdfsdf",
//             "Sdfsdfsdf",
//             "Lorem ipsum dolor"
//         ]
//     },
//     {
//         numb: 4,
//         question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
//         answer: "Lorem ipsum dolor",
//         options: [
//             "shjdkghkjfdg",
//             "sdfsdfsdf",
//             "Sdfsdfsdf",
//             "Lorem ipsum dolor"
//         ]
//     }
// ]
// let que_count = 0
// let nextBtn = document.querySelector(".next_btn")
// let options = document.querySelector(".options")
// let question = document.querySelector(".question")
// function showQuestions() {
//     question.innerHTML = questions[que_count].numb + "." + questions[que_count].question
//     options.innerHTML = `
//     <li class="option_li">${questions[que_count].options[0]}</li>
//     <li class="option_li">${questions[que_count].options[1]}</li>
//     <li class="option_li">${questions[que_count].options[2]}</li>
//     <li class="option_li">${questions[que_count].options[3]}</li>
//     `
// }
// showQuestions()
// quizCounter()
// nextBtn.addEventListener("click", function () {
//     if (que_count < questions.length - 1) {
//         que_count++
//         showQuestions()
//         quizCounter()
//     }
//     else {
//         console.log("completed");
//     }
// })
// function quizCounter() {
//     let quizQue = document.querySelector(".quiz_que")
//     quizQue.innerHTML = questions[que_count].numb + " of " + questions.length
// }
"use strict";