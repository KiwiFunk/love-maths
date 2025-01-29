//Wait for DOM Content to load before executing game JS
document.addEventListener('DOMContentLoaded', function() {
    
    // Populate btn-text with date from data-type attribute
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        const btnText = button.nextElementSibling;
        btnText.textContent = button.getAttribute('data-type');
    });

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

