const arr = [2, 3, 5, 6, 7, 8, 9];

// Squire the numbers and sumation

let sum = 0;

for (num of arr){
    sum +=  num ** 2;
}

console.log(sum);

console.log(arr.at(-1));
console.log(arr.at(-2));