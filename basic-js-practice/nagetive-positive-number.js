let arr =[-1, -2, 0, 1, 2];
let newArr = [];
for (let num of arr){
    if(num < 0){
        console.log(`${num} is Nagetive`);
    }
    else if(num === 0){
        console.log(`${num} is Zero`);
    }
    else{
        console.log(`${num} is Positive`);
    }
}
