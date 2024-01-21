// Using for of Loop -----------------------------

let myArray = [1, 2, 3, 4, 5, 6, 7];

function myFind(arr, checkValue) {
  for (const item of arr) {
    if (checkValue(item)) {
      return item;
    }
  }
  return false;
}
console.log(
  myFind(myArray, (data) => {
    return data < 4;
  })
);

// Using For Loop -------------------------------

/* let exArr = [4, 3, 4, 5, 6, 7, 1, 2];
function myFind(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      return arr[i];
    }
  }
  return false;
}
console.log(
  myFind(exArr, (element) => {
    return element < 3;
  })
); */