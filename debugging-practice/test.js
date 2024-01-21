// const myArr = ['a', "u", "j", 3, 2, 8, 7];
// const obj ={};

// // myArr.forEach(function (v) {
// //   obj[v] = v;

// // });


// // for (const v of myArr){
// //   obj[v] = v;
// // } 
// obj[-7]=7
// obj[0]= 0;
// obj[1]= 1;

// console.log(obj);
const arr=[1,2,3,4]
newArray = arr.reduce(function(preV, current){
    preV = preV * 2;
    return preV;
})
console.log(newArray)