function randomNumberGenerator (Min, Max){
    const randomNumber = Math.floor(Math.random() * (Max - Min + 1) + Min);
    return randomNumber;
}

let randomNumber = randomNumberGenerator(1, 5);

console.log(randomNumber);