// Factorial with the Decrement Way -----------------------

/* function factorial (num){
    let res = 1;
    for(let i = 1; i <= num; i++){
         res *= i;
    }
    return res;
}
console.log(factorial(5)); */

// Factorial with the Decrement Way -----------------------

/* function factorial (num){
    let res = 1;
    for(let i = num; i >= 1; i--){
         res *= i;
    }
    return res;
}

console.log(factorial(5)); */

// Factorial with if-else condition and Call back function -----------------------

function factorial(n) {
  if (n == 0) return 1;
  else return factorial(n - 1) * n;
}
console.log(factorial(4));
