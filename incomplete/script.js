




const quizForm = document.getElementById('quiz-options');
const form = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-btn');
const quizBod = document.getElementById('quiz-body');


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

    // set the current question variable to the current question object 

    // create a variable for the current question options



    const questionElement = document.createElement('h2');
    questionElement.innerText = currentQuestion.question;
    quizForm.appendChild(questionElement);


    for (/*Loop through your options and create an input radio button for each one*/) {

        // create a variable called option and use it to dynamically create an input element
        // do the same thing wil a label and we'll call this optionLabel
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

        // set the attributes of the option input
        //we want to set the type to 'radio' the name to 'option' and the value to the value which should be 1-4 in order


        // set options innter text to the correct value

        // set the label inner text to the correct value


        quizForm.appendChild(optionContainer);
        optionContainer.appendChild(option);
        optionContainer.appendChild(letterLabel);
        optionContainer.appendChild(optionLabel);

    }
}


function handleSubmit(e) {
    e.preventDefault();


    // this is how we can check and see which input is selected
    const selectedOption = document.querySelector('input[name="option"]:checked');


    // checks if anything is selected
    if (selectedOption) {

        // create a variable that stores the value of out selected option
        if (/* we need to check to see if the user answered the question right */) {
            //if they do then add to the score
        }

        // add 1 to our activeQuestion variable

        if (/* lets check and see if we are on the last question or not */) {
            // if we aren't, then lets run our setActiveQuestion function
        } else {
            quizBod.innerHTML = `
            <div class="win-screen">
            <h1>Your quiz is complete</h1>

            //display the score here 

            </div>
            `
        }

    } else {
        //alerts if no answer is selected
        alert("please select an answer before submitting")
    }
}

//we need to initially run this on page load 
setActiveQuestion();

//adds the submit function to our button
submitButton.addEventListener("click", handleSubmit);