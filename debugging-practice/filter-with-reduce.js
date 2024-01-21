
const array = [1, 2, 5, 3, 6, 4, 9, 8, 7];

const myFilter = array.reduce((acc, value) => {
  if (value > 4) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(myFilter);