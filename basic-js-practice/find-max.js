
/* function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
findMax(4, 5, 6); */


// Find out the Max Value of an Array Using For of ---------------

const arr = [2, 3, 5];

let max = 0;
for (num of arr){
  if( max < num){
    max = num;
  }
}

console.log(max);
