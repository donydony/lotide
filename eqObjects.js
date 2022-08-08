const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let k of keys1) {
    if (object1[k] !== object2[k]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;