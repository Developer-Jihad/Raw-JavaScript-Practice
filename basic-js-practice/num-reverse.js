const numArr =[1, 2, 3, 4, 5];

let reverseArr =[];

for (let i = numArr.length-1; i >= 0; i--){
    reverseArr.push(numArr[i]);
}

console.log(reverseArr);