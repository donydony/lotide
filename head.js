// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr[0]) {
    return arr[0];
  }
};

module.exports = head;