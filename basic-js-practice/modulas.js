
const arr = [3, 6, 9, 1, 8, 16, 14, 13];

// Practice with for Loop-----------------------------------

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i] + ' is an even number');
    }
    else{
        console.log(arr[i] +  ' is a odd number');
    }
};

// Practice with for of Loop-----------------------------------

for (const num of arr){
    if(num % 2 === 0){
        console.log(`${num} is an even number`);
    }
    else{
        console.log(`${num} is a odd number`);
    }
}