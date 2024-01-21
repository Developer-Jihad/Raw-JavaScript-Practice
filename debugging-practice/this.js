// let object = {
//   a: 10,
//   b: 20,
//   fn: function () {
//     console.log(this);
//   },
// };
// object.fn();

/* 
function name() {
    function name1() {
        return this
    }
    return name1;
}
console.log(name()() === global); */

let a = {
b: function () {
    console.log(this);
}
}
a.b();