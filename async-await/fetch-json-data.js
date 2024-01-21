/* 
function loadlmages(){
    fetch("URL")
    .then(res => res.json())
    .then(data => renderlmages(data) 
*/

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => console.log(json.slice(0, 15)));

/* 
async function loadlmages(){
    const res = await fetch("URL")
    const data => await res.json()
    renderlmages(data) 
*/

async function myFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data.slice(0, 15));
}

myFetch();
