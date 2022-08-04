const findKey = function(obj, callBack) {
  for (let key in obj) {
    if (callBack(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;