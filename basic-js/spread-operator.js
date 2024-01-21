// Using Object---------------------------

let person1 = {
    name: 'Abdullah',
    age: 25,
    // add: 'lakshmir'
}
let person2 = {
    name: 'jihad',
    age: 24
}

person2.age = 25;

person1 = {...person2, add: 'lakshmipur'};

console.log(person1);

// Using Array---------------------------------

let arr1 = [1, 2, 4, 6, 3 ,7];

let arr2 = [10, 22, 41, 64, 32 ,71];

arr2.pop();
arr2.push(23);

arr1 = [...arr2];

console.log(arr1);