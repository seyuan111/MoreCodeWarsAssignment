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