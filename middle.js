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

module.exports = middle;