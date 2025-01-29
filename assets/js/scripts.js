//Global Values

let maxVal = 25;

//Wait for DOM Content to load before executing game JS
document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('.btn');
    for (let button of buttons) {

        // Add click event listener to each button
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') alert('You clicked submit!');

            else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
            
        });

        // Populate btn-text with date from data-type attribute
        button.nextElementSibling.textContent = button.getAttribute('data-type');
    }

});


//Main game loop
function runGame() {

    let num1 = getRandomValue(maxVal);
    let num2 = getRandomValue(maxVal);

}

//Use argument to set max value. perhaps implement a difficulty setting that increases or decreases max
function getRandomValue(max) {
    return Math.floor(Math.random() * max) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {
}



function incrementScore() {
}

function incrementWrongAnswer() {
}



function displayAdditionQuestion() {
}

function displaySubtractQuestion() {
}

function displayMultiplyQuestion() {
}

function displayDivideQuestion() {
}
