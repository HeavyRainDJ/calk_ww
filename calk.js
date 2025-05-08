// script.js

let display = document.getElementById('display');

function appendNumber(number) {
    if (display.value.length >= 12) return;
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        let result = eval(display.value);
        if (result.toString().length > 12) {
            display.value = "Переполнение";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});



function changeSign() {
    if (display.value !== "0") {
        display.value = parseFloat(display.value) * -1;
    }
}

// Вычисление процента (%)
function calculatePercentage() {
    try {
        display.value = parseFloat(display.value) / 100;
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Вычисление квадратного корня (√)
function calculateSquareRoot() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            display.value = "Ошибка";
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Возведение в квадрат (x²)
function calculateSquare() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2);
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Вычисление факториала (x!)
function calculateFactorial() {
    try {
        let value = parseInt(display.value);
        if (value < 0 || !Number.isInteger(value)) {
            display.value = "Ошибка";
        } else {
            let factorial = 1;
            for (let i = 1; i <= value; i++) {
                factorial *= i;
            }
            display.value = factorial;
        }
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Накапливаемое сложение
function accumulateAddition() {
    try {
        accumulator += parseFloat(display.value);
        display.value = accumulator;
        isAccumulating = true;
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Накапливаемое вычитание
function accumulateSubtraction() {
    try {
        if (!isAccumulating) {
            accumulator = parseFloat(display.value);
            isAccumulating = true;
        } else {
            accumulator -= parseFloat(display.value);
        }
        display.value = accumulator;
    } catch (error) {
        display.value = "Ошибка";
    }
}

// Индивидуальная операция (например, возведение в степень y^x)
function customOperation() {
    try {
        let base = parseFloat(prompt("Введите основание:"));
        let exponent = parseFloat(prompt("Введите показатель степени:"));
        display.value = Math.pow(base, exponent);
    } catch (error) {
        display.value = "Ошибка";
    }
}