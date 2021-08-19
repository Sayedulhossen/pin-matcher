function getPin() {
    const pin = Math.round(Math.random()*10000);
    const stringPin = pin + '';
    if(stringPin.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
    
}
function genaratePin() {
    const pin = getPin();
    document.getElementById('genarate-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function verifyPin() {
    const pin = document.getElementById('genarate-pin').value;
    const typeNumbers = document.getElementById('typed-numbers').value;
    const pinSuccess = document.getElementById('match-success');
    const pinError = document.getElementById('match-error');
    if (pin == typeNumbers) {
        pinSuccess.style.display = 'block';
        pinError.style.display = 'none';
    }
    else {
        pinError.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
}