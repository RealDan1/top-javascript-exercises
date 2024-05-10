const removeFromArray = function (inputs, ...rest) {
  outerloop1: for (const item of rest) {
    if (inputs.includes(item)) {
      let atIndexToRemove = inputs.indexOf(item);
      inputs.splice(atIndexToRemove, 1);
      while (inputs.includes(item)) {
        let atIndexToRemove = inputs.indexOf(item); //swap this line with continue
        inputs.splice(atIndexToRemove, 1); //swap this line with continue
        // continue outerloop1;
      }
    }
  }
  return inputs;
};

// Do not edit below this line
module.exports = removeFromArray;
//for every item of inputs i need to remove every item of rest
//so for every input - do remove item[i] of rest
//for every rest - remove that item from inputs[];
