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

const middle = function(arr) {
  const result = [];
  if (arr.length === 0) {
    return result;
  }
  if (arr.length % 2 === 0) {
    result.push(arr[(arr.length / 2) - 1]);
    result.push(arr[arr.length / 2]);
    return result;
  }
  if (arr.length % 2 !== 0) {
    result.push(arr[Math.floor(arr.length / 2)]);
    return result;
  }
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);