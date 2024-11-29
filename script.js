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
        id: 1
    },
    {
        question: 'What metalmind would a Keeper use to store physical weight?',
        a: 'A. Copper',
        b: 'B. Brass',
        c: 'C. Iron',
        d: 'D. Electrum',
        id: 2
    },
    {
        question: 'What metal can be burned by anyone and make the individual a Mistborn?',
        a: 'A. Steel',
        b: 'B. Zinc',
        c: 'C. Bronze',
        d: 'D. Lerasium',
        id: 3
    },
    {
        question: 'What shape do Logicspren take in the Physical Realm on Roshar?',
        a: 'A. Objects they recently saw',
        b: 'B. Tiny Stormclouds',
        c: 'C. Tiny, Red Insect-like',
        d: 'D. Brown Specks with Wings',
        id: 4
    },
    {
        question: 'If you had access to the Surges of Illumination and Progression, what Knight Radiant order would you belong to?',
        a: 'A. Truthwatchers',
        b: 'B. Stonewards',
        c: 'C. Windrunners',
        d: 'D. Lightweavers',
        id: 5
    },{
        question: 'What is the third ideal Dalinar speaks?',
        a: 'A. I will unite instead of divide. I will bring men together.',
        b: 'B. I will protect even those I hate so long as it is right',
        c: 'C. I will take responsibility for what I have done. If I must fall, I will rise each time a better man.',
        d: 'D. I am a stick.',
        id: 6
    },{
        question: 'Other than Awakening, what other ability does Vivenna have in Warbreaker?',
        a: 'A. Surgebinding',
        b: 'B. Forgery',
        c: 'C. The Force',
        d: 'D. Royal Locks',
        id: 7
    },{
        question: 'What did Lightsong the Bold do in his previous life?',
        a: 'A. Detective',
        b: 'B. Chef',
        c: 'C. Accountant',
        d: 'D. Clown',
        id: 8
    },{
        question: 'What Shard did the vessel Edgli hold?',
        a: 'A. Odium',
        b: 'B. Endowment',
        c: 'C. Ambition',
        d: 'D. Ruin',
        id: 9
    },{
        question: 'What does the Aon Rao mean?',
        a: 'A. Spirit',
        b: 'B. Love',
        c: 'C. The Direction East',
        d: 'D. Focus',
        id: 10
    }
]
quizContent[0].correctAnswer = quizContent[0].b
quizContent[1].correctAnswer = quizContent[1].c
quizContent[2].correctAnswer = quizContent[2].d
quizContent[3].correctAnswer = quizContent[3].b
quizContent[4].correctAnswer = quizContent[4].a
quizContent[5].correctAnswer = quizContent[5].c
quizContent[6].correctAnswer = quizContent[6].d
quizContent[7].correctAnswer = quizContent[7].c
quizContent[8].correctAnswer = quizContent[8].b
quizContent[9].correctAnswer = quizContent[9].a
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