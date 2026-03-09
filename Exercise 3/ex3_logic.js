let numbersArray = [];

document.getElementById('btnInsert').onclick = function() {
    const input = document.getElementById('ex3_input');
    const val = parseFloat(input.value);

    if (!isNaN(val)) {
        numbersArray.push(val);
        updateDisplay();
        input.value = '';
        input.focus();
    }
};

document.getElementById('btnDelete').onclick = function() {
    numbersArray = [];
    updateDisplay();
};

function updateDisplay() {
    const listSpan = document.getElementById('numberList');
    // Join numbers with line breaks to stack them vertically
    listSpan.innerHTML = numbersArray.join('<br>');

    if (numbersArray.length > 0) {
        const sum = numbersArray.reduce((a, b) => a + b, 0);
        document.getElementById('ex3_sum').innerText = sum;
        document.getElementById('ex3_high').innerText = Math.max(...numbersArray);
        document.getElementById('ex3_low').innerText = Math.min(...numbersArray);
    } else {
        document.getElementById('ex3_sum').innerText = '';
        document.getElementById('ex3_high').innerText = '';
        document.getElementById('ex3_low').innerText = '';
    }
}