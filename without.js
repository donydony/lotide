const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
  }
};

const without = function(source, remove) {
  const result = [];
  let notIn = true;
  for (let i of source) {
    for (let j of remove) {
      if (i === j) {
        notIn = false;
      }
    }
    if (notIn) {
      result.push(i);
    }
    notIn = true;
   }
   return result;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);