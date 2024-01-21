
const arr = [5,2,9,6,4,3,8,1,7];
let max = 0;
let max2 = 0;
for(num of arr){
    if (num > max){
        max = num;
    }
    else if(num > max2 && max !== max2){
        max2 = num ;
    }
}
console.log(max2);