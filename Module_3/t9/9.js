const button = document.getElementById('start');
const result = document.querySelector('#result');


const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? (a / b).toFixed(2) : 'Division by zero is not allowed'
};

function calculator() {
    const calculation = document.getElementById('calculation').value.split(/([+\-*/])/);

    console.log(calculation.length)

    let a, b, symb;
    if (calculation.length === 3) {
        a = Number(calculation[0]);
        b = Number(calculation[2]);
        symb = calculation[1];
    } else {
        result.innerHTML = 'Invalid operation';
        return;
    }

    console.log(a, b, symb)
    console.log("+-*/".includes(symb))

    if (isNaN(a) || isNaN(b) || !"+-*/".includes(symb)) {
        result.innerHTML = 'Please enter valid numbers';
    } else {
        result.innerHTML = operations[symb]?.(a, b) ?? 'Invalid operation';
    }
}

button.addEventListener('click', calculator);