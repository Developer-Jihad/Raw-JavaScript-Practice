/* let button = document.getElementById("button");
let menu = document.getElementById("menu");

button.addEventListener("click", () => {
  let creatEle = document.createElement("li");
  creatEle.setAttribute("id", "myId");
  creatEle.innerText = "12321";
  menu.insertAdjacentElement("afterbegin", creatEle);
}); */

let eventTest = document.getElementById("eventTest");
let eventValue = document.getElementById("eventValue");

eventTest.addEventListener("mousemove", (e) => {
  //   console.log(`X: ${e.clientX} Y: ${e.clientY}`);
  let innerText = `X: ${e.clientX} Y: ${e.clientY}`;
  eventValue.innerHTML = innerText;
  eventTest.innerHTML = innerText;
  console.log(innerText);
});
