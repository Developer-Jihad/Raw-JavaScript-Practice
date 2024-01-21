
function multiplyMethod (num){
    const arr = [];
    for(let i = 1; i <= 10; i++){
        arr.push(num*i);
    }
    return arr;
}

console.log(multiplyMethod(9));