const array = [1, 2, 5, 3, 6, 4, 9, 8, 7];

const myFilter = array.reduce((acc, value) => {

  if (value > 5 && acc === undefined) {
    acc = value
  }
  
  return acc;
}, undefined);

console.log(myFilter);