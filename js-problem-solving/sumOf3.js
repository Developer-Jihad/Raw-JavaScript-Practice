
let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];
for (let i = 0; i < arr.length-2; i++) {
  let sum = arr[i] + arr[i + 1]+ arr[i + 2];
  newArr.push(sum);
}
console.log(newArr);