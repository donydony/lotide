const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj);
  for (let k of keys) {
    if (obj[k] === value) {
      return k;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;