const flatten = function(arr) {
  const result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let j of i) {
        result.push(j);
      }
    } else {
      result.push(i);
    }
  }
  return result;
};

module.exports = flatten;