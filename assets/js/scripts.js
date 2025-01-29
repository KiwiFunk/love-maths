//Global Values

let maxVal = 25;

//Wait for DOM Content to load before executing game JS
document.addEventListener('DOMContentLoaded', function() {


    const questionPlaceholder = document.getElementById('question-placeholder');
    const questionContainer = document.getElementById('question-container');
    
    const buttons = document.querySelectorAll('.btn');
    for (let button of buttons) {

        // Add click event listener to each button
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') alert('You clicked submit!');

            else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);

                questionPlaceholder.classList.add('hidden');
                questionContainer.classList.remove('hidden');
            }
            
        });

        // Populate btn-text with date from data-type attribute
        button.nextElementSibling.textContent = button.getAttribute('data-type');
    }




    // Wait for the user to init a game mode by click
    //Hide placeholder prompt
    //Show the question-area div
    //then
    //runGame('UserInput);

});


//Main game loop
function runGame(gameType) {

    let num1 = getRandomValue(maxVal);
    let num2 = getRandomValue(maxVal);

    switch(gameType) {

        case 'addition':
            displayAdditionQuestion(num1, num2);
            break;

        case 'subtract':
            displaySubtractQuestion(num1, num2);
            break;

        case 'multiply':
            displayMultiplyQuestion(num1, num2);
            break;

        case 'division':
            displayDivideQuestion(num1, num2);
            break;

        default:
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;

    }

}

//Use argument to set max value. perhaps implement a difficulty setting that increases or decreases max
function getRandomValue(max) {
    return Math.floor(Math.random() * max) + 1;
}


//Logic Functions

function checkAnswer() {

}

function calculateCorrectAnswer() {
}

//Score Handling Functions

function incrementScore() {
}

function incrementWrongAnswer() {
}

//Question Functions
function displayAdditionQuestion(op1, op2) {
    document.getElementById('operator').textContent = '+'
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
}

function displaySubtractQuestion(op1, op2) {
    document.getElementById('operator').textContent = '-'
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
}

function displayMultiplyQuestion(op1, op2) {
    document.getElementById('operator').textContent = 'x'
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
}

function displayDivideQuestion(op1, op2) {
    document.getElementById('operator').textContent = '÷'
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
}
