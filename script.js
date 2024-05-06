// Quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Oxygen", "Gold", "Silver", "Osmium"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which city is known as the 'Big Apple'?",
        answers: ["Los Angeles", "Chicago", "New York", "Miami"],
        correctAnswer: "New York"
    },
    {
        question: "In which year did World War II end?",
        answers: ["1942", "1945", "1948", "1950"],
        correctAnswer: "1945"
    },
    {
        question: "Who was the first manned mission to land on the Moon?",
        answers: ["Apollo 11", "Apollo 13", "Gemini 7", "Mercury 1"],
        correctAnswer: "Apollo 11"
    },
    {
        question: "What is the currency of Japan?",
        answers: ["Yen", "Dollar", "Euro", "Rupee"],
        correctAnswer: "Yen"
    },
    {
        question: "What is the smallest prime number?",
        answers: ["1", "2", "3", "5"],
        correctAnswer: "2"
    },
    {
        question: "Which is the longest river in the world?",
        answers: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correctAnswer: "Nile"
    },
    {
        question: "Which city is known as the City of Love?",
        answers: ["Paris", "Venice", "Rome", "Florence"],
        correctAnswer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which planet has the most moons?",
        answers: ["Jupiter", "Saturn", "Earth", "Mars"],
        correctAnswer: "Saturn"
    },
    {
        question: "Who is the author of the Harry Potter series?",
        answers: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
        correctAnswer: "J.K. Rowling"
    },
    {
        question: "What is the square root of 64?",
        answers: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "Which ocean is the largest by surface area?",
        answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctAnswer: "Pacific"
    },
    {
        question: "Who was the 16th President of the United States?",
        answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt"],
        correctAnswer: "Abraham Lincoln"
    },
    {
        question: "Which chemical element is denoted by the symbol 'K'?",
        answers: ["Potassium", "Krypton", "Kadmium", "Kobalt"],
        correctAnswer: "Potassium"
    },
    {
        question: "What year did the Titanic sink?",
        answers: ["1912", "1914", "1920", "1905"],
        correctAnswer: "1912"
    },
    {
        question: "Which of these is a mammal?",
        answers: ["Shark", "Crocodile", "Dolphin", "Penguin"],
        correctAnswer: "Dolphin"
    },
    {
        question: "Which continent has the most countries?",
        answers: ["Asia", "Europe", "Africa", "South America"],
        correctAnswer: "Africa"
    },
    {
        question: "Who discovered penicillin?",
        answers: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"],
        correctAnswer: "Mount Everest"
    }
];


// State variables for quiz management
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;

// References to DOM elements
const questionText = document.getElementById("question-text");
const answerList = document.getElementById("answer-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultSection = document.getElementById("result-section");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// Load a question
function loadQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.question;

    // Clear previous answers
    answerList.innerHTML = "";

    question.answers.forEach((answer) => {
        const li = document.createElement("li");
        li.textContent = answer;

        // Select answer on click
        li.addEventListener("click", function() {
            // Unselect other answers
            Array.from(answerList.children).forEach((child) => {
                child.style.backgroundColor = "white";
            });

            li.style.backgroundColor = "#e0e0e0"; // Highlight selected answer
            selectedAnswer = answer; // Store selected answer
        });

        answerList.appendChild(li);
    });

    // Manage button state
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === questions.length - 1;
}

// Load the first question
loadQuestion(currentQuestionIndex);

// Go to the next question
nextBtn.addEventListener("click", function() {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        score += 1; // Increment score for correct answer
    }

    currentQuestionIndex += 1; // Move to the next question
    loadQuestion(currentQuestionIndex);
    selectedAnswer = null; // Reset selected answer
});

// Go to the previous question
prevBtn.addEventListener("click", function() {
    currentQuestionIndex -= 1; // Go back to the previous question
    loadQuestion(currentQuestionIndex);
    selectedAnswer = null; // Reset selected answer
});

// Submit the quiz
submitBtn.addEventListener("click", function() {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        score += 1; // Increment score for correct answer
    }

    // Display result section and hide quiz section
    resultSection.style.display = "block";
    document.querySelector(".quiz-section").style.display = "none";

    // Show the final score
    finalScore.textContent = `${score} / ${questions.length}`;
});

// Restart the quiz
restartBtn.addEventListener("click", function() {
    score = 0; // Reset score
    currentQuestionIndex = 0; // Reset question index
    resultSection.style.display = "none"; // Hide result section
    document.querySelector(".quiz-section").style.display = "block"; // Show quiz section
    loadQuestion(currentQuestionIndex); // Load the first question
    selectedAnswer = null; // Reset selected answer
});


