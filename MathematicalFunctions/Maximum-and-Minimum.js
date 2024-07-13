function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

let numbers = [1, 2, 3, 4, 5];
console.log(findMaximum(numbers)); // Output: 5
console.log(findMinimum(numbers)); // Output: 1
