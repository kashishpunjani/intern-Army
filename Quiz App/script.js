// const quizContainer = document.getElementById('quiz-container');
// const questionContainer = document.getElementById('question-container');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.getElementById('next-button');

// let currentQuestionIndex = 0;
// let score = 0;

// const questions = [
//     {
//         question: "What is the capital of France?",
//         answers: [
//             { text: "Berlin", correct: false },
//             { text: "Paris", correct: true },
//             { text: "Madrid", correct: false },
//             { text: "Rome", correct: false }
//         ]
//     },
//     {
//         question: "Which programming language is this quiz built with?",
//         answers: [
//             { text: "Java", correct: false },
//             { text: "Python", correct: false },
//             { text: "JavaScript", correct: true },
//             { text: "C#", correct: false }
//         ]
//     },
//     // Add more questions as needed
// ];

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.classList.add('hide');
//     showQuestion(questions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//     questionContainer.innerText = question.question;
//     resetAnswerButtons();
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');
//         button.addEventListener('click', () => selectAnswer(answer));
//         answerButtons.appendChild(button);
//     });
// }

// function resetAnswerButtons() {
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(answer) {
//     const correct = answer.correct;
//     if (correct) {
//         score++;
//     }

//     nextButton.classList.remove('hide');
// }

// function nextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion(questions[currentQuestionIndex]);
//         nextButton.classList.add('hide');
//     } else {
//         endQuiz();
//     }
// }

// function endQuiz() {
//     quizContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
// }

// // Start the quiz
// startQuiz();
















// const quizContainer = document.getElementById('quiz-container');
// const questionContainer = document.getElementById('question-container');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.getElementById('next-button');

// let currentQuestionIndex = 0;
// let score = 0;

// const questions = [
//     {
//         question: "What is the capital of Japan?",
//         answers: [
//             { text: "Beijing", correct: false },
//             { text: "Seoul", correct: false },
//             { text: "Tokyo", correct: true },
//             { text: "Bangkok", correct: false }
//         ]
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         answers: [
//             { text: "Earth", correct: false },
//             { text: "Mars", correct: true },
//             { text: "Venus", correct: false },
//             { text: "Jupiter", correct: false }
//         ]
//     },
//     {
//         question: "Who wrote 'Romeo and Juliet'?",
//         answers: [
//             { text: "Charles Dickens", correct: false },
//             { text: "William Shakespeare", correct: true },
//             { text: "Jane Austen", correct: false },
//             { text: "Mark Twain", correct: false }
//         ]
//     },
//     // Add more questions as needed
// ];

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.classList.add('hide');
//     showQuestion(questions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//     questionContainer.innerText = question.question;
//     resetAnswerButtons();
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');
//         button.addEventListener('click', () => selectAnswer(answer));
//         answerButtons.appendChild(button);
//     });
// }

// function resetAnswerButtons() {
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(answer) {
//     const correct = answer.correct;
//     if (correct) {
//         score++;
//     }

//     nextButton.classList.remove('hide');
// }

// function nextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion(questions[currentQuestionIndex]);
//         nextButton.classList.add('hide');
//     } else {
//         endQuiz();
//     }
// }

// function endQuiz() {
//     quizContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
// }

// // Start the quiz
// startQuiz();




















const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    // ... (unchanged)
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    // Add more questions as needed
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    restartButton.classList.add('hide');
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    resetAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }

    nextButton.classList.remove('hide');
    restartButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    restartButton.classList.remove('hide');
}

function restartQuiz() {
    startQuiz();
}

// Start the quiz
startQuiz();
