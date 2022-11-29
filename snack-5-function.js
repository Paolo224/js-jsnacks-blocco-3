const numbers = [2, 667, 98, 732, 759, 8364];

function getSumOfArray(numbers){
    
let somma = 0;

for(i = 0; i < numbers.length; i++){
    const castedElements = parseInt(numbers[i], 10);
    somma += castedElements;
}

return somma;

}

console.log(getSumOfArray(numbers));


