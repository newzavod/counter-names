
//todo работает var1
let primeNumber = prompt('input any one prime positive number', '1');
//let result = primeNumber;

function checkInput() {
    const primeNumber10 = primeNumber % 10;
    const primeNumber100 = primeNumber % 100;

    if (isNaN(primeNumber)) { return alert('is not a number'); }
    else if (primeNumber < 0) { return alert('input only positive number'); }
    else if (primeNumber100 > 10 && primeNumber100 < 20) { return console.log(`${primeNumber} Иванов`); }
    else if (primeNumber10 > 1 && primeNumber10 < 5) { return console.log(`${primeNumber} Ивана`); }
    else if (primeNumber10 === 1) { return console.log(`${primeNumber} Иван`); }
    else return console.log(`${primeNumber} Иванов`);
};

checkInput(primeNumber);

