let array = [[1, 2, 3, 4], 3];
let flatArray = array.flat();
let removeFromArray = flatArray.filter(function (number) {
    return number !== 3;
});
console.log(removeFromArray);

// Do not edit below this line
module.exports = removeFromArray;
