const quizContent = [
    {
        question: 'What metal, when burned by an allomancer, enhances their senses?',
        a: 'A. Cadmium',
        b: 'B. Tin',
        c: 'C. Pewter',
        d: 'D. Gold',
        correctAnswer: 'B. Tin'
    },
    {
        question: 'What metalmind would a Keeper use to store physical weight?',
        a: 'A. Copper',
        b: 'B. Brass',
        c: 'C. Iron',
        d: 'D. Electrum',
        correctAnswer: 'C. Iron'
    },
    {
        question: 'What metal can be burned by anyone and make the individual a Mistborn?',
        a: 'A. Steel',
        b: 'B. Zinc',
        c: 'C. Bronze',
        d: 'D. Lerasium',
        correctAnswer: 'D. Lerasium'
    },
    {
        question: 'What shape do Logicspren take in the Physical Realm on Roshar?',
        a: 'A. Objects they recently saw',
        b: 'B. Tiny Stormclouds',
        c: 'C. Tiny, Red Insect-like',
        d: 'D. Brown Specks with Wings',
        correctAnswer: 'B. Tiny Stormclouds'
    },
    {
        question: 'If you had access to the Surges of Illumination and Progression, what Knight Radiant order would you belong to?',
        a: 'A. Truthwatchers',
        b: 'B. Stonewards',
        c: 'C. Windrunners',
        d: 'D. Lightweavers',
        correctAnswer: 'A. Truthwatchers'
    },{
        question: 'What is the third ideal Dalinar speaks?',
        a: 'A. I will unite instead of divide. I will bring men together.',
        b: 'B. I will protect even those I hate so long as it is right',
        c: 'C. I will take responsibility for what I have done. If I must fall, I will rise each time a better man.',
        d: 'D. I am a stick.',
        correctAnswer: 'C. I will take responsibility for what I have done. If I must fall, I will rise each time a better man.'
    },{
        question: 'Other than Awakening, what other ability does Vivenna have in Warbreaker?',
        a: 'A. Surgebinding',
        b: 'B. Forgery',
        c: 'C. The Force',
        d: 'D. Royal Locks',
        correctAnswer: 'D. Royal Locks'
    },{
        question: 'What did Lightsong the Bold do in his previous life?',
        a: 'A. Detective',
        b: 'B. Chef',
        c: 'C. Accountant',
        d: 'D. Clown',
        correctAnswer: 'C. Accountant'
    },{
        question: 'What Shard did the vessel Edgli hold?',
        a: 'A. Odium',
        b: 'B. Endowment',
        c: 'C. Ambition',
        d: 'D. Ruin',
        correctAnswer: 'B. Endowment'
    },{
        question: 'What does the Aon Rao mean?',
        a: 'A. Spirit',
        b: 'B. Love',
        c: 'C. The Direction East',
        d: 'D. Focus',
        correctAnswer: 'A. Spirit'
    }
]

const quizContainter = document.getElementById('quizContainer')
const startBtn = document.getElementById('startBtn')

//Grab a question
const question = quizContent[0/*Math.floor(Math.random() * 10)*/]
function shuffleQuiz(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i + 1)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}
const quizShuffled = shuffleQuiz(quizContent)
console.log(quizShuffled)
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

    //add check to see if button is the right answer
    answerA.setAttribute('onclick', 'checkAnswer(this)')
    answerB.setAttribute('onclick', 'checkAnswer(this)')
    answerC.setAttribute('onclick', 'checkAnswer(this)')
    answerD.setAttribute('onclick', 'checkAnswer(this)')
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

function checkAnswer(element) {
    //check if the button clicked is equal to the correct answer
    element.textContent === question.correctAnswer ? console.log('that is right') : console.log('try again')
}

startBtn.addEventListener('click', (e) => {
    startQuiz(quizContent)
})