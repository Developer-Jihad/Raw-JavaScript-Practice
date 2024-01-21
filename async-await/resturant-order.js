const takeOrder = (customer, callback) => {
  console.log(`Take Order for ${customer}`);
  callback(customer);
};
const arrangeFood = (customer, callback) => {
  setTimeout(() => {
    console.log(`Arranging Foods for ${customer}`);
    callback(customer);
  }, 2000);
};
const processOrder = (customer, callback) => {
  setTimeout(() => {
    console.log(`Process Order for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Dear ${customer}, Your Order has been Completed`);
};

takeOrder("jihad", (customer) => {
  arrangeFood(customer, (customer) => {
    processOrder(customer, (customer) => {
      completeOrder(customer);
    });
  });
});
