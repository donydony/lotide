const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (/([a-zA-Z])/.test(sentence[i])) {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;