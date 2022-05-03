//If you can't sleep, just count sheep

var countSheep = function(num){
    let str = ""

    for(let i = 1; i <=num; i++){
        return str
    }
}

//Merge two sorted arrays into one

function mergeArrays(arr1, arr2){
    let sortedArray = arr1.concat(arr2).sort((a,b) => a-b);
    let updatedArray = (array) => [...new Set(array)];
    return updatedArray(sortedArray);
}

//Difference of Valumes of Cuboids

function findDifference(a,b){
    return Math.abs( (a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]));
}

//Removing Elements

function removeEveryOther(arr){
    for(let i=1; i < arr.length; i++){
        arr.splice(i,1);
    }
    return arr;
}

//Round up to the next multiple of 5

function roundToNext5(n){
    return Math.ceil(n/5) * 5;
}

//Rock paper scissors

const rps = (p1, p2) => {
  
    if((p1 === "scissors" && p2 === "paper") || (p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock")){
      return "Player 1 won!"
    }else if((p1 === "paper" && p2 === "scissors") || (p1 === "scissors" && p2 === "rock") || (p1 === "rock" && p2 === "paper")){
      return "Player 2 won!"
    }else if(p1 === p2){
      return "Draw!"
    }
  };

//will you make it. 

//You were camping with your friends far away from home, but when it's
//time to go back, you realize that your fuel is running out and the
//nearest pump is 50 miles away! You know that on average, your car runs
//on about 25 miles per gallon. There are 2 gallons left. Considering
//these factors, write a function that tells you if it is possible to
//get to the pump or not. Function should return true
//(1 in Prolog, NASM and COBOL) if it is possible and false
//(0 in Prolog, NASM and COBOL) if not. The input values are always
//positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump <= mpg * fuelLeft){
      return true
    }else {
      return false
    }
  };

//pillars

//There are pillars near the road. The distance between the pillars is
//the same and the width of the pillars is the same. Your function accepts
//three arguments:

//number of pillars (≥ 1);

//distance between pillars (10 - 30 meters);

//width of the pillar (10 - 50 centimeters).

//Calculate the distance between the first and the last pillar in
//centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    if(num_pill <=1){
      return 0;
    }else{
      return num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100)
    }
  }

//Narcissistic Numbers

//A Narcissistic Number is a number of length n in which the sum of its
//digits to the power of n is equal to the original number.
//If this seems confusing, refer to the example below.

//Ex: 153, where n = 3 (number of digits in 153)
//13 + 53 + 33 = 153

function isNarcissistic(n){
    return n === n.toString().split('').reduce((s,v,i,arr) => s + Math.pow(v, arr.length),0)
  }

//parse nice Int from char problem

function getAge(inputString){
    return parseInt(inputString);
}

//count of positives sum of negatives

//Return an array, where the first element is the count of positives
//numbers and the second element is sum of negative numbers. 0 is neither
//positive nor negative.
//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
  
    if(input === null || input.length === 0){
      return []
    }else{
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num)
    }
  return [positiveNums, negativeNums]
}