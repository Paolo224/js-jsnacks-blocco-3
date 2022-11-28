const array1 = [
    'ciao',
    'buongiorno',
    'buonasera',
    'salve',
    'buonpomeriggio',
    'buonanotte',
];

const array2 = [
    'hello',
    'good morning',
    'good evening',
    'good night',
];

while(array1.length < array2.length){
    array1.push('nuovo elemento');
}

while(array2.length < array1.length){
    array2.push('nuovo elemento');
}

console.log(array1);
console.log(array2);