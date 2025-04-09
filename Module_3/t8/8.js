const operation = document.getElementById('operation');
const button = document.getElementById('start');
const result = document.querySelector('#result')
const operations = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multi: (a, b) => a * b,
    div: (a, b) => b !== 0 ? (a / b).toFixed(2) : 'Division by zero is not allowed'
};

function calculator() {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    const op = operation.value;
    if (isNaN(a) || isNaN(b)) {
        result.innerHTML = 'Please enter valid numbers';
    } else {
        result.innerHTML = operations[op]?.(a, b) ?? 'Invalid operation';
    }
}

button.addEventListener('click', calculator);