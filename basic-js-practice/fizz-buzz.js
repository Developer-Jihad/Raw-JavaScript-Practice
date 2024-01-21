const arr = [2, 3, 5, 4, 6, 7, 8, 9, 10, 12, 15, 14, 16, 17, 19, 20, 21];
const buzzArr= [];
const fizzArr= [];
const otherNum= [];


for (const num of arr){
    if (!(num % 5) && !(num % 3)){ 
        console.log(num, 'is Fizz-Buzz');
    }
    else if (!(num % 5)){
        // console.log(num, 'is Fizz');
        fizzArr.push(num);
    }
    else if (!(num % 3)){
        // console.log(num, 'is Buzz');
        buzzArr.push(num);
    }
    else{
        otherNum.push(num)
    }
}
console.log(buzzArr, 'are Buzz');
console.log(fizzArr, 'are Fizz');
console.log(otherNum, 'are Normal Number');