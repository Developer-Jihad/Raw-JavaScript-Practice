let myPromise = new Promise((resolve, reject) => {
  let myObj = {
    name: "Jihad",
    address: "Lakshmipur",
    age: 24,
    gender: "male",
  };
  setTimeout(() => {
    resolve(myObj);  
    reject(" The Request has been Rejected ");
  }, 3000);
});

myPromise.then((res) => {
  console.log(res);
});

async function nam() {
  let data = await myPromise;
  console.log(data);
}
nam();
