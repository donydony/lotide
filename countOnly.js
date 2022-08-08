const countOnly = function(allItems, itemsToCount) {
  const result = {};
  
  for (let items of allItems) {
    if (itemsToCount[items]) {
      if (result[items]) {
        result[items]++;
      } else {
        result[items] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;