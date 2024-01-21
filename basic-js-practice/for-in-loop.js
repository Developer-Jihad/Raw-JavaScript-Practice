// For in Loop Practice ------------------------------------------

/* 
const person = {
    name: 'Jihad',
    age: 24,
    address: 'Lakshmipur',
    study: 'Honours',
    religion: 'islam',
    gender: 'Male'
}

for (const key in person){
    console.log(`${key}: ${person[key]}`);
    if(key == 'study'){
        console.log(`${key}: ${person[key]}`);
    }
} 
*/
     
// For of Loop Practice ------------------------------------------

const myArr = [21, 32, 23, 44, 51, 67, 83, 77, 44, 89];

for (const num of myArr){
    if(num % 2 === 0){
        console.log(num);
    }
}