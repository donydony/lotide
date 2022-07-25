const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
};

// Test Case 1: Check the returned array elements
const original = ["Hello", "Lighthouse", "Labs"];
const result = tail(original);
console.log(original); //checking to see if original has been modified or not
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(['hi']);
assertEqual(result2.length, 0);

const result3 = tail([]);
assertEqual(result3.length, 0);