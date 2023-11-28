const removeFromArray = function (array, ...args) {

  const newArray = [];

  array.forEach((item) => {

    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};


removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
