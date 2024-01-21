/* function primeNumber (num) {
    if (num === 1 || num === 2 || num === 3 || num === 5 || num === 7){
        return (num + " is a Prime Number");
    }
    if (!(num % 5) || !(num % 3) || !(num % 2) || !(num % 7)){
        return (num + ' is Not a Prime Number');
    }
    else {
        return (num + ' is a Prime Number');
    }
}
console.log(primeNumber(2)); */

// --------------------------------------------------------------------------
// Indivitual Prime Number Checking

/* function isPrime(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isPrime(31)); */
// --------------------------------------

function getPrimeNumber(num) {
  let primeArr = [];
  for (let n = 2; n < num; n++) {
    let remein = 1;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        remein = 0;
        break;
      }
    }
    if (n > 1 && remein == 1) {
      primeArr.push(n);
    }
  }
  console.log(`❇️  There Are ${primeArr.length} Prime Numbers bellow.😍`);
  return primeArr;
}

console.log(getPrimeNumber(100));


