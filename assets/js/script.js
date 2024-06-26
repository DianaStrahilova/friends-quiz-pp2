// Modal
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.closeModal');

//Game buttons
const startButton = document.getElementById('startButton');
const playAgain = document.getElementById('playAgain');
const gameEnd = document.getElementById('gameEnd');
const homeElement = document.querySelector('.home');


// Event listeners
playAgain.addEventListener('click', () => {
    gameEnd.classList.add('hidden');
    homeElement.classList.remove('hidden');
    document.getElementById('userName').value = '';
});
startButton.addEventListener('click', () => {
    startQuiz();
});
openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});



// Questions array
const questions = [
    {
        question: "What is the name of Ross’s second wife?",
        options: ["Carol", "Emily", "Rachel", "Susan"],
        correctAnswer: 1
    },
    {
        question: "Which character famously said, “We were on a break”?",
        options: ["Joey", "Chanlder", "Ross", "Mike"],
        correctAnswer: 2
    },
    {
        question: "What is the title of the theme song of F.R.I.E.N.D.S?",
        options: ["I'll be there for you", "Smelly Cat", "Central Perk", "The One With All The Friends"],
        correctAnswer: 0
    },
    {
        question: "What does Joey never share?",
        options: ["His books", "His food", "His DVDs", "His clothes"],
        correctAnswer: 1
    },
    {
        question: "What is Chandler’s middle name?",
        options: ["Matthew", "Marvin", "Michael", "Muriel"],
        correctAnswer: 3
    },
    {
        question: "Which character has a twin?",
        options: ["Rachel", "Ross", "Phoebe", "Joey"],
        correctAnswer: 2
    },
    {
        question: "What job does Ross have?",
        options: ["Chef", "Actor", "Copywriter", "Paleontologist"],
        correctAnswer: 3
    },
    {
        question: "What is the name of Joey’s stuffed penguin?",
        options: ["Waddle", "Pingu", "Huggsy", "Mr.Flipper"],
        correctAnswer: 2
    },
    {
        question: "What game do Joey and Chandler play that causes them to win Monica and Rachel’s apartment?",
        options: ["Poker", "Football", "Cups", "Quiz Game"],
        correctAnswer: 3
    },
    {
        question: "In which city is “F.R.I.E.N.D.S” primarily set?",
        options: ["Los Angeles", "Miami", "New York City", "Chicago"],
        correctAnswer: 2
    }
]


// DOM elements 
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const scoreValue = document.getElementById('value');
const incorrectAnswersElement = document.querySelector('#incorrect span');
const gameArea = document.getElementById('gameArea');
const NewHighScore = document.getElementById('newHighScore');
const scoreEndGame = document.querySelector('#scoreText span');

const optionsElement = [
    document.getElementById('answer0'),
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3')
];

let userName = '';
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
let highScore = localStorage.getItem('highScore'); //load highscore from local storage

function startQuiz() {
    userName = document.getElementById('userName').value;

    //Check if username field is empty
    if (!userName)
        return alert ('Please enter a username!'); //show alert message

    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;

    scoreValue.innerHTML = 0;
    incorrectAnswersElement.innerHTML = 0;

    homeElement.classList.add('hidden');
    gameArea.classList.remove('hidden');
    NewHighScore.classList.add('hidden');

    loadQuestion();
}
// Load the questions 
//Return a message to the user at the end of the quiz, depending on their score
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        gameArea.classList.add('hidden');
        gameEnd.classList.remove('hidden');
        document.getElementById('gameEndText').innerHTML = `Congratulations, <span>${userName}</span>! You completed the quiz!`;
        scoreEndGame.textContent = score;

        if (score > highScore) {
            //update new high score in local storage
            localStorage.setItem('highScore', score);
            //show 'new high score' text
            NewHighScore.classList.remove('hidden');
        }
        return;
    }

    answersElement.innerHTML = '';

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.options.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer;
        button.classList.add('optionBtn');
        button.addEventListener('click', () => {
            checkAnswer(button);
        });
        answersElement.appendChild(button);
    });
}
// Checking the answer 
function checkAnswer(button) {
    const answer = button.innerHTML;
    const answerIndex = questions[currentQuestionIndex].options.indexOf(answer);

    //Lock buttons
    document.querySelectorAll('.optionBtn').forEach(button => {
        button.disabled = true;
    });

    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
        scoreValue.innerHTML = score;
        button.classList.add('correctAnswer');
    } else {
        button.classList.add('incorrectAnswer');
        incorrectAnswers++;
        incorrectAnswersElement.innerHTML = incorrectAnswers;

        document.querySelectorAll('.optionBtn').forEach(button=> {
            if (button.textContent === questions[currentQuestionIndex].options[questions[currentQuestionIndex].correctAnswer]) {
                button.classList.add('correctAnswer');
            }
        });
    }
    //Load next question after the timer expires
    setTimeout (() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}


