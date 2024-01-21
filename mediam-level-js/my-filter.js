
let myArray = [1, '', null, undefined, 'name'];

function getfilteredArray (array, checkValueType){
    let filteredArray = [];
    for(const element of array){
        if (checkValueType(element)){
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
const output = getfilteredArray(myArray, checkValueType);
console.log(output);

function checkValueType(data){
    return data? data: false;
}

// -----------------------------------------

/* const ages = [32, 33, 16, 40];

console.log(ages.filter(checkAdult));

function checkAdult(age) {
  return age >= 18;
}
 */