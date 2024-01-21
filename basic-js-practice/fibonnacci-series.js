 
function fiboSeries (num) {
    let fiboArr = [0, 1];

    for (let i = 0; i < num; i++){
        fiboArr.push(fiboArr[i] + fiboArr[i+1]); 
    }
    return fiboArr;
}
console.log(fiboSeries (100));