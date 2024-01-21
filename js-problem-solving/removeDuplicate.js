function removeDuplicate() {}

let myArray = [2, 3, 2, 4, 1, 4, 3];
let newArray = [];

for (const num of myArray) {
  // console.log(num);
  if (newArray.includes(num)) {
    newArray.push(0);
  } else {
    newArray.push(num);
  }
}

console.log(newArray);


