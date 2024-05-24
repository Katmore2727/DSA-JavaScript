//  Q1) Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements 
//  in A[] whose sum is exactly x.

function Sum(arr, x) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                return true;
            }
        }
    }
    return false;
}

const arr = [1,2,3,4,5];
let x = 8;

if (Sum(arr, x)) {
    console.log(`There exist elements in the array whose sum is ${x}`);
} else {
    console.log(`No such pair exists in the array.`);
}