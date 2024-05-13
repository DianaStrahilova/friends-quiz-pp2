// Modal
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.closeModal');

const startButton = document.getElementById('startButton');
const playAgain = document.getElementById('playAgain');
const gameEnd = document.getElementById('gameEnd');
const homeElement = document.querySelector('.home');

// Button event listeners
openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

playAgain.addEventListener('click', () => {
    gameEnd.classList.add('hidden');
    homeElement.classList.remove('hidden');
    document.getElementById('userName').value = '';
});

startButton.addEventListener('click', () => {
    startQuiz();
})


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

