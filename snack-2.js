
const numbers = [];

let userNumber;

let somma = 0;

while(somma < 50){
    userNumber = parseInt(prompt('Inserisci un numero!'));
    somma += userNumber;
    numbers.push(userNumber);
}

console.log(numbers);
console.log(somma);



