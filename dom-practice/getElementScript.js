let menu = document.getElementById("menu");

let list = [...menu.children];

let myArr = [];

for (const item of list) {
  if (item.tagName == "DIV") {
    let ul = [...item.children];
    for (const item of ul) {
      let li = [...item.children];
      for (const item of li) {
        myArr.push(item.innerHTML);
      }
    }
  } else {
    myArr.push(item.innerHTML);
  }
}
console.log(myArr.sort());
