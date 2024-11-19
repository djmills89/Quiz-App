//User should be notified to guess again if they get the wrong answer
//Notified if they get the correct answer
//Button to go to the next question if answer is correct
//Lets user know when quiz is over
//Button to restart the quiz
//Function that creates the quiz when a button is pressed and starts it


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

//Grab DOM Elements
const quizContainter = document.getElementById('quizContainer')
const startBtn = document.getElementById('startBtn')

//Store the shuffled quiz
const quizShuffled = shuffleQuiz(quizContent)
console.log(quizShuffled)



//Starts quiz when button is clicked
startBtn.addEventListener('click', (e) => {
    startQuiz(quizShuffled)
})