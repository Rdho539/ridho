const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            displayValue = '';
        } else if (value === '←') {
            displayValue = displayValue.slice(0, -1);
        } else if (value === '=') {
            try {
                displayValue = displayValue.replace('x', '*'); // Replace 'x' with '*'
                displayValue = eval(displayValue);  // Evaluate the expression
            } catch (error) {
                displayValue = 'Error';
            }
        } else {
            displayValue += value;
        }

        display.value = displayValue;
    });
});
