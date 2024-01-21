// Get Sum using For of Loop ----------------------------------

const array1 = [1, 2, 3, 4];

let sum = 0;
for(number of array1){
    sum += number;
}
console.log(sum);

// Get Sum using Reduce Method ----------------------------------

const array2 = [1, 2, 3, 4];

let total = array2.reduce(function(sum, number){
    return sum += number;
}, 0);

console.log(total);

// ----------------------------------------------------------

/* const myObj = {
    myName : 'Jihad',
    age : 24,
    profession : "student"
} */
const myObj = [1, 2, 3, 4];

let object = myObj.reduce(function(finalObj, value){
     finalObj[value] = Math.random();
     return finalObj;
}, {});

console.log(object);