const countLetters = function (str) {
  const result = {};
  for (let l of str) {
    if (/([a-zA-Z])/.test(l)) {
      if (result[l]) {
        result[l]++;
      } else {
        result[l] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;