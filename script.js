document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value === 'C') {
          currentInput = '0';
          operator = null;
          previousInput = null;
        } else if (value === '=') {
          if (operator && previousInput !== null) {
            currentInput = calculate(previousInput, currentInput, operator);
            operator = null;
            previousInput = null;
          }
        } else if (['+', '-', '*', '/'].includes(value)) {
          if (operator && previousInput !== null) {
            currentInput = calculate(previousInput, currentInput, operator);
          }
          operator = value;
          previousInput = currentInput;
          currentInput = '0';
        } else {
          if (currentInput === '0' && value !== '.') {
            currentInput = value;
          } else {
            currentInput += value;
          }
        }
  
        display.innerText = currentInput;
      });
    });
  
    function calculate(a, b, operator) {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      if (operator === '+') return (numA + numB).toString();
      if (operator === '-') return (numA - numB).toString();
      if (operator === '*') return (numA * numB).toString();
      if (operator === '/') return (numA / numB).toString();
      return b;
    }
  });
  