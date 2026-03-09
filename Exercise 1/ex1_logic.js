document.getElementById('btnCalc1').onclick = function() {
    const n1 = parseFloat(document.getElementById('ex1_num1').value);
    const n2 = parseFloat(document.getElementById('ex1_num2').value);
    
    if (!isNaN(n1) && !isNaN(n2)) {
        document.getElementById('sum').innerText = n1 + n2;
        document.getElementById('diff').innerText = n1 - n2;
        document.getElementById('prod').innerText = n1 * n2;
        document.getElementById('quot').innerText = n2 !== 0 ? (n1 / n2).toFixed(2) : "Error (Div by 0)";
    }
};

document.getElementById('btnClear1').onclick = function() {
    document.querySelectorAll('input').forEach(i => i.value = '');
    document.querySelectorAll('span').forEach(s => s.innerText = '');
};