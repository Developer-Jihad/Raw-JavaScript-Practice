/*
 * Our Task -----------------------------------
 *Take order from the coustomer and Process the Name
 * Manage Ingredient and Process the Customer name -- 1s
 * Process food and Customer -- 5s
 * Complete order with the processed name -- .5s
 */

const takeOrder = (customer) => {
  return new Promise((resolve) => {
    resolve({
      cName: customer,
      massage: "The Order has been taken from " + customer,
    });
  });
};

const manageIngredient = (processedName) => {
  let prosName = "humgry " + processedName;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        cName: processedName,
        massage: "The Order has been taken for " + prosName,
      });
    }, 1000);
  });
};

const processFood = (processedName) => {
  let prosName = "very humgry " + processedName;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        cName: processedName,
        massage: "The Order has been Processed for " + prosName,
      });
    }, 5000);
  });
};

const completeOrder = (processedName) => {
  let prosName = "too much humgry " + processedName;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        cName: processedName,
        massage: "The Order has been Completed for " + prosName,
      });
      reject(new Error("Opps, we can not give you the Food"));
    }, 500);
  });
};

async function makeOrder() {
  const orderStatus = await takeOrder("Jihad");
  console.log(orderStatus.massage);
  const managingStatus = await manageIngredient(orderStatus.cName);
  console.log(managingStatus.massage);
  const processingStatus = await processFood(managingStatus.cName);
  console.log(processingStatus.massage);
  const completingStatus = await completeOrder(processingStatus.cName);
  console.log(completingStatus.massage);
}
makeOrder();
// -----------------------------------------------
/* 
takeOrder("Rizwan Shovo")
  .then((res) => {
    console.log(res.massage);
    return res.cName;
  })
  .then(manageIngredient)
  .then((res) => {
    console.log(res.massage);
    return res.cName;
  })
  .then(processFood)
  .then((res) => {
    console.log(res.massage);
    return res.cName;
  })
  .then(completeOrder)
  .then((res) => {
    console.log(res.massage);
  }); 
*/
// -----------------------------------------------
// console.log(takeOrder("jihad"));
// console.log(manageIngredient());
// console.log(processFood());
// console.log(completeOrder());
// -----------------------------------------------
/* takeOrder("Rizwan Shovo").then((res) => {
  console.log(res.massage);
  manageIngredient(res).then((res) => {
    console.log(res.massage);
    processFood(res).then((res) => {
      console.log(res.massage);
      completeOrder(res).then((res) => {
        console.log(res.massage);
      });
    });
  });
}); */
