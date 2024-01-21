function parent() {
  let a = 11;
  let b = 25;
  function child() {
    return a + b;
  }
  return child;
}

console.log(parent()());
