let obj = {
  func: function () {
    return {
      x: () => {
        return this;
      },
    };
  },
};
console.log(obj.func().x());
