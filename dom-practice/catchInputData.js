let nameInput = document.getElementById("name");

nameInput.addEventListener("keypress", function (e) {
  //   console.log(e.target.value);

  if (e.key === "Enter") {
    let inputedText = document.createElement("p");
    // inputedText.setAttribute("id", "myId");
    // document.getElementById("myId").appendChild(inputedText);
    // inputedText.innerText = e.target.value;

    inputedText.innerHTML = e.target.value;
    nameInput.insertAdjacentElement("afterend", inputedText);

    e.target.value = "";
  }
});
