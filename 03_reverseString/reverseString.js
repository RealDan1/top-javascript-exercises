const reverseString = function (string) {
  stringArr = [];
  for (let i = 0; i < string.length; i++) {
    stringArr[i] = string.charAt(i);
  }
  let newStringArr = [];
  for (let i = 0; i < string.length; i++) {
    newStringArr[string.length - i] = stringArr[i];
  }
  const outputString = newStringArr.join('');
  return outputString;
};
// Do not edit below this line
module.exports = reverseString;
