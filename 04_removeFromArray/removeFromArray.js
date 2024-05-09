const removeFromArray = function (inputs, cut) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].includes(cut)) {
      inputs[i] = inputs[i].splice(i, 1);
    }
  }
};

// Do not edit below this line
module.exports = removeFromArray;
