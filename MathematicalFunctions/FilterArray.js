function filterArray(arr, condition) {
    return arr.filter(condition);
}

let isEven = num => num % 2 === 0;
console.log(filterArray(numbers, isEven)); // Output: [2, 4]
