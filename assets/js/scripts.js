//Global Values

let maxVal = 25;

//Stopwatch Global Variables
let elapsedTime = 0;
let timerInterval;

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

                //Use if statement to make sure code is only exexuted on initial game start
                if (questionContainer.classList.contains('hidden'))
                {
                    questionPlaceholder.classList.add('hidden');
                    questionContainer.classList.remove('hidden');
    
                    document.getElementById('answer-box').addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') checkAnswer();
                    });

                    document.getElementById('answer-box').focus();
                }
            }
        });

        // Populate btn-text with date from data-type attribute
        button.nextElementSibling.textContent = button.getAttribute('data-type');
    }

    

});


//Main game loop
function runGame(gameType) {

    startStopwatch();

    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();
    document.getElementById('resultprompts').innerHTML = '';

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
    stopStopwatch();
    
    let userAnswer = parseFloat(document.getElementById('answer-box').value);
    let correctAnswer = parseFloat(calculateCorrectAnswer()[0]);
    let isCorrect = userAnswer === correctAnswer;

    if(isCorrect) {
        calcScore(isCorrect);
        scoreboard();
        document.getElementById('resultprompts').innerHTML = 'You got it <span class="correct">right</span>! :D';
    }
    else {
        calcScore(isCorrect);
        document.getElementById('resultprompts').innerHTML = `You got it <span class="incorrect">wrong</span>! D: The correct answer was ${correctAnswer}`;
    }

    //runGame(calculateCorrectAnswer()[1]);
    setTimeout(() => runGame(calculateCorrectAnswer()[1]), 1500);
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

function scoreboard() {
    let timeTaken = parseFloat(document.getElementById('stopwatch-display').textContent);
    let score = 0;
    
    if (timeTaken <= 1.0) score = 1000; 
    else if (timeTaken <= 3.0) score = 100;
    else if (timeTaken <= 7.0) score = 10;
    else score = 1;
    
    let totalScore = parseInt(document.getElementsByClassName('total-score')[0].textContent);
    document.getElementsByClassName('total-score')[0].textContent = totalScore + score;
}

//Question Functions
function displayAdditionQuestion(op1, op2) {
    document.getElementById('operator').textContent = '+'
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
}

function displaySubtractQuestion(op1, op2) {
    // Ensure op1 is always larger than op2 to avoid negative numbers
    let larger = Math.max(op1, op2);
    let smaller = Math.min(op1, op2);
    
    document.getElementById('operator').textContent = '-'
    document.getElementById('operand1').textContent = larger;
    document.getElementById('operand2').textContent = smaller;
}

function displayMultiplyQuestion(op1, op2) {
    document.getElementById('operator').textContent = 'x'
    document.getElementById('operand1').textContent = op1;
    document.getElementById('operand2').textContent = op2;
}

function displayDivideQuestion(op1, op2) {
    document.getElementById('operator').textContent = '÷'
    document.getElementById("operand1").textContent = op1 > op2 ? op1 : op2;
    document.getElementById("operand2").textContent = op1 > op2 ? op2 : op1;
    document.getElementById('resultprompts').innerHTML = 'Round to 1 decimal place';
}

//Stopwatch Functions
function startStopwatch() {
    clearInterval(timerInterval); // Clear any existing interval
    elapsedTime = 0; // Reset elapsed time
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    stopwatchDisplay.textContent = elapsedTime.toFixed();

    timerInterval = setInterval(function() {
        elapsedTime += 0.01;
        stopwatchDisplay.textContent = elapsedTime.toFixed(2);
    }, 10); // Update every 10 milliseconds for 0.01 second increments
}


function stopStopwatch() {
    clearInterval(timerInterval);
}