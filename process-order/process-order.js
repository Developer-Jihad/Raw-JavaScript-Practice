const takeOrder = (customer, callback) => {
  console.log(`Take Order for ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Process Order for ${customer}`);
  callback(customer);
};

const completeOrder = (customer) => {
  console.log(`Dear ${customer}, Your Order has been Completed`);
};

takeOrder("jihad", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
