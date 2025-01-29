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






    function runGame() {

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

});

