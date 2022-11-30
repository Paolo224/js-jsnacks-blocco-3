const array = [1, 33, 55 ,64, 33, 22, 10, 44];

const divElement1 = document.getElementById('green');
const divElement2 = document.getElementById('red');



function createNewElementP(content){
    const newPElement = document.createElement('p');
    newPElement.innerText = content
    return newPElement;
}

for( let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        divElement1.append(createNewElementP(array[i]))
    } else 
        divElement2.append(createNewElementP(array[i]))
}
