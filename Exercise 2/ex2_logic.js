document.getElementById('btnGenerate').onclick = function() {
    const f = document.getElementById('fname').value;
    const m = document.getElementById('mname').value;
    const l = document.getElementById('lname').value;
    
    // Combining names with spaces
    document.getElementById('fullname').innerText = f + " " + m + " " + l;
};

document.getElementById('btnClear2').onclick = function() {
    document.getElementById('fname').value = '';
    document.getElementById('mname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('fullname').innerText = '';
};