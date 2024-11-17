const quizContent = [
    {
        question: 'What is your favorite color',
        a: 'A. Red',
        b: 'B. Green',
        c: 'C. Yellow',
        d: 'D. Black',
        correctAnswer: 'B'
    }
]

const quizContainter = document.getElementById('quizContainer')
const startBtn = document.getElementById('startBtn')

//Grab a question
const question = quizContent[0/*Math.floor(Math.random() * 10)*/]
console.log(question)
//Each Question should have a group of answers
//Each Question Should have a correct answer
//User should be notified to guess again if they get the wrong answer
//Notified if they get the correct answer
//Button to go to the next question if answer is correct
//Lets user know when quiz is over
//Button to restart the quiz
//Function that creates the quiz when a button is pressed and starts it
function startQuiz(quizArr) {
    quizContainter.innerHTML = ''
    createQuiz(quizArr, 0)
}

function createQuiz(quizArr, questionIndex) {
    //create the question box
    const questionBox = document.createElement('p')
    //create the answer box
    const answerBox = document.createElement('div')
    //get the question
    const question = quizArr[questionIndex].question
    //create the answer buttons
    const answerA = createAnswerButtons(quizContent[questionIndex], 'a')
    const answerB = createAnswerButtons(quizContent[questionIndex], 'b')
    const answerC = createAnswerButtons(quizContent[questionIndex], 'c')
    const answerD = createAnswerButtons(quizContent[questionIndex], 'd')
    //append all to the appropriate boxes
    questionBox.textContent = question
    quizContainter.appendChild(questionBox)
    //append all buttons to the answer section of the box
    answerBox.append(answerA, answerB, answerC, answerD)
    quizContainter.appendChild(answerBox)
    //add quiz controls
}

function createAnswerButtons(quizArr, quizKey) {
    //grab the quiz array with the quiz key value pair and create a button for it
    const answerButton = document.createElement('button')
    answerButton.textContent = quizArr[quizKey]
    return answerButton
}

function restartQuiz() {

}

function checkAnswer() {
    
}

startBtn.addEventListener('click', (e) => {
    startQuiz(quizContent)
})