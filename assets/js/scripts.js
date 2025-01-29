

// Populate btn-text with date from data-type attribute
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        const btnText = button.nextElementSibling;
        btnText.textContent = button.getAttribute('data-type');
    });
});