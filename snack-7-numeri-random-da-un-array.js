const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const randomNumberOfStartingList = [];

let randomNumber;


while(randomNumberOfStartingList.length < 10){
    randomNumber = Math.floor(Math.random() * (startingList.length - startingList[0] + 1) + startingList[0]);
    if(randomNumberOfStartingList.includes(randomNumber)){
        randomNumber = Math.floor(Math.random() * (startingList.length - startingList[0] + 1) + startingList[0]);
    } else{
        randomNumberOfStartingList.push(randomNumber);
    }
}


console.log(randomNumberOfStartingList);
