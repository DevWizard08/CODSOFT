let currentValue = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('result').value = currentValue;
}

function clearResult() {
  currentValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    currentValue = eval(currentValue);
    document.getElementById('result').value = currentValue;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
