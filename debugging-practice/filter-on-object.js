const array = [
  { name: "a", age: 30 },
  { name: "b", age: 25 },
  { name: "c", age: 35 },
  { name: "d", age: 13 },
  { name: "e", age: 23 },
  { name: "f", age: 18 },
];

/* let filteredData = array.filter((data) => data.age > 20).map((v) => v.age);
// console.log(filteredData.map(function(v){
//     return v.age;
// }));
console.log(filteredData); */

let arr = [];
let filteredData = array.reduce(function (acc, value) {
  if (value.age > 20) {
    arr.push(value.age);
}
// return (acc = [value]);
}, []);
console.log(arr);

console.log(filteredData);
