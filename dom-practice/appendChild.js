/* const para = document.createElement("h1");
para.innerHTML = "This is a h1 paragraph.";
document.getElementById("element-id").appendChild(para); */

// -------------------------------------------------------------

/* let element = document.getElementById("element-id");

function genericElement(tagName, tagValue) {
  let eleName = document.createElement(tagName);
  eleName.innerHTML = tagValue;
  eleName.setAttribute("style", "background-color:red;");
  element.appendChild(eleName);
}

genericElement("h1", "Hello how Are You?"); */

// ------------------------------------------------------------

let button = document.getElementById("button");
let menu = document.getElementById("menu");

button.addEventListener("click", function (e) {
  let li = document.createElement("li");
  li.innerText = Math.random();
  menu.insertAdjacentElement("afterend", li);
  e.preventDefault;
});
