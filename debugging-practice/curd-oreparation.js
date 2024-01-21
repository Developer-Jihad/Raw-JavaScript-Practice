/* 
c = create;
u = update;
r = read;
d = delete; 
*/

const myObj = {
  e: 10,
  obj: {
    c: 30,
  },
  a: 34,
  d: {
    f: 33,
    i: {
      j: 12,
      k: {
        10: {
          20: {
            80: {
              70: {
                90: "ujekjfkjdakjsd",
              },
            },
          },
        },
      },
    },
  },
};


  const values = [];

  function explore(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        explore(obj[key]);
      } else {
        values.push(obj[key]);
      }
    }
  }
  explore(myObj);

console.log(values);