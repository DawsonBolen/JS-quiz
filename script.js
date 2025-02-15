

let activeQuestion = 1;
let currentQuestion;
let score = 0;


const quizForm = document.getElementById('quiz-options');
const form = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-btn');


const quizBod = document.getElementById('quiz-body');



//let them start with this or else it will take to long to do
const questions = [
    {
        number: 1,
        question: "Which of the following is a correct way to create a variable in JavaScript?",
        options: [
            "var myVariable = 10;",
            "variable myVariable = 10;",
            "let: myVariable = 10;",
            "set myVariable = 10;",
        ],
        correctAnswer: "1"
    },
    {
        number: 2,
        question: "What does console.log() do in JavaScript?",

        options: [
            "Opens a new website",
            "Displays a message on the screen",
            "Shows a message in the browser's console",
            "Sends a text message",
        ],
        correctAnswer: "3"
    },
    {
        number: 3,
        question: "Which of these is the correct way to write a function in JavaScript?",

        options: [
            "function myFunction {}",
            "function: myFunction[]",
            "function myFunction() {}",
            "function = myFunction()",
        ],
        correctAnswer: "3"
    },
    {
        number: 4,
        question: "What does an if statement do in JavaScript?",

        options: [
            "It repeats a block of code",
            "It runs code only if a condition is true",
            "It creates a new webpage",
            "It asks the user for input",
        ],
        correctAnswer: "2"
    },
    {
        number: 5,
        question: "What type of data can you store in a JavaScript array?",

        options: [
            "Only numbers",
            "Only words (strings)",
            "Numbers, strings, and even other arrays",
            "Only functions",
        ],
        correctAnswer: "3"
    }

]

function setActiveQuestion() {

    quizForm.innerHTML = '';

    //we subtract one because arrays are 0 indexed
    currentQuestion = questions[activeQuestion - 1];


    let options = currentQuestion.options;

    const questionElement = document.createElement('h2');
    questionElement.innerText = currentQuestion.question;
    quizForm.appendChild(questionElement);


    for (let i = 0; i < options.length; i++) {

        var option = document.createElement('input');
        var optionLabel = document.createElement('label');
        var optionContainer = document.createElement('div');
        var letterLabel = document.createElement('span');

        if (i === 0) {
            letterLabel.innerText = "A";
        } else if (i === 1) {
            letterLabel.innerText = "B";
        } else if (i === 2) {
            letterLabel.innerText = "C";
        } else {
            letterLabel.innerText = "D";
        }

        optionContainer.classList.add('option-container');

        option.type = 'radio';
        option.name = 'option';
        option.value = i + 1;


        option.innerText = options[i];


        optionLabel.innerText = options[i];

        quizForm.appendChild(optionContainer);
        optionContainer.appendChild(option);
        optionContainer.appendChild(letterLabel);
        optionContainer.appendChild(optionLabel);




    }
}


function handleSubmit(e) {
    e.preventDefault();

    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const selectedValue = selectedOption.value;
        if (selectedValue === currentQuestion.correctAnswer) {
            score++;
        }

        activeQuestion++;

        if (activeQuestion <= questions.length) {
            setActiveQuestion();
        } else {
            quizBod.innerHTML = `
            <div class="win-screen">
            <h1>Your quiz is complete</h1>

            <p>final score: ${score}</p>

            </div>
            `
        }

    } else {
        alert("please select an answer before submitting")
    }
}
setActiveQuestion();

submitButton.addEventListener("click", handleSubmit);