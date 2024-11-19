//Shuffles the Quiz array
function shuffleQuiz(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i + 1)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}


//Starts the Quiz
function startQuiz(quizArr) {
    quizContainter.innerHTML = ''
    createQuiz(quizArr, 0)
}


//Creates the quiz elements
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

    //add check to see if button is the right answer
    answerA.setAttribute('onclick', `checkAnswer(this), ${quizArr[questionIndex].correctAnswer}`)
    answerB.setAttribute('onclick', `checkAnswer(this), ${quizArr[questionIndex].correctAnswer}`)
    answerC.setAttribute('onclick', `checkAnswer(this), ${quizArr[questionIndex].correctAnswer}`)
    answerD.setAttribute('onclick', `checkAnswer(this), ${quizArr[questionIndex].correctAnswer}`)
    //append all to the appropriate boxes
    questionBox.textContent = question
    quizContainter.appendChild(questionBox)
    //append all buttons to the answer section of the box
    answerBox.append(answerA, answerB, answerC, answerD)
    quizContainter.appendChild(answerBox)
    //add quiz controls
    
}


//Creates the answer buttons for the quiz
function createAnswerButtons(quizArr, quizKey) {
    //grab the quiz array with the quiz key value pair and create a button for it
    const answerButton = document.createElement('button')
    answerButton.textContent = quizArr[quizKey]
    return answerButton
}


//Checks the answers
function checkAnswer(element, correctAnswer) {
    //check if the button clicked is equal to the correct answer
    element.textContent === correctAnswer ? console.log('that is right') : console.log('try again')
}


//Will restart quiz, when i get around to it
function restartQuiz() {

}