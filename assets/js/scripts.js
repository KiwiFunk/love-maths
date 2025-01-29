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
            if (this.getAttribute('data-type') === 'submit') checkAnswer();

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

/**
 * Gets the operands and the operator from the DOM and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let op1 = parseInt(document.getElementById('operand1').innerText);
    let op2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    switch(operator) {
        case '+':
            return [op1 + op2, 'addition'];
        case '-':
            return [op1 - op2, 'subtract'];
        case 'x':
            return [op1 * op2, 'multiply'];
        case '÷':
            return [(op1 / op2).toFixed(1), 'division'];
        default:
            alert(`Unimplemented operator: ${operator}`);
            throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById('answer-box').value);
    let correctAnswer = parseFloat(calculateCorrectAnswer()[0]);
    let isCorrect = userAnswer === correctAnswer;

    if(isCorrect) {
        alert('You got it right! :D');
        calcScore(isCorrect);
    }
    else {
        alert(`You got it wrong! D: The correct answer was ${correctAnswer}`);
        calcScore(isCorrect);
    }

    runGame(calculateCorrectAnswer()[1]);
}

//Score Handling Functions
function calcScore(correct) {
    let correctCount = document.querySelector('.score');
    let incorrectCount = document.querySelector('.incorrect');
    if (correct) {
        correctCount.innerHTML = parseInt(correctCount.innerHTML) + 1;
    }
    
    else {
        incorrectCount.innerHTML = parseInt(incorrectCount.innerHTML) + 1;
    }
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
