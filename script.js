let display = document.getElementById('display');
let clear = false;

function appendToScreen(value) {
    if (clear) {
        display.value = '';
        clear = false;
    }
    display.value += value;
}

function clearScreen() {
    display.value = '';
}


function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/\^/g, '**'); //expressão para números elevados a potência

        display.value = eval(expression);
        clear = true;
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1); // Remove o último caractere
}