let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').innerText = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').innerText = '';
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    displayResult(result);
  } catch (error) {
    displayError();
  }
}

function displayResult(result) {
  document.getElementById('display').innerText = result;
  document.getElementById('equals').classList.add('clicked');
  setTimeout(() => {
    document.getElementById('equals').classList.remove('clicked');
  }, 600);
}

function displayError() {
  document.getElementById('display').innerText = 'Error';
  setTimeout(() => {
    clearDisplay();
  }, 1500);
}
