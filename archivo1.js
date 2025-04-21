// Constantes
const DOM = {
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    btnSum: document.getElementById('btn-sum'),
    btnReset: document.getElementById('btn-reset'),
    result: document.getElementById('result'),
    year: document.getElementById('year')
};

// Funciones
const calculateSum = () => {
    const value1 = parseFloat(DOM.num1.value) || 0;
    const value2 = parseFloat(DOM.num2.value) || 0;
    DOM.result.textContent = `Resultado: ${value1 + value2}`;
};

const resetCalculator = () => {
    DOM.num1.value = '';
    DOM.num2.value = '';
    DOM.result.textContent = '';
};

const setCurrentYear = () => {
    DOM.year.textContent = new Date().getFullYear();
};

// Event Listeners
DOM.btnSum.addEventListener('click', calculateSum);
DOM.btnReset.addEventListener('click', resetCalculator);

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    console.log('Aplicación inicializada');
});
