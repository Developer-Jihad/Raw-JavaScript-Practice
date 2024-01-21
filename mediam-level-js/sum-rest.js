
function sumAll(a, b, ...rest) {
  let sum = 0;
  let arr = [a, b, ...rest];
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9,10));
