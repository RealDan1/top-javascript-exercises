const repeatString = function (string, num) {
    for (let i = 1; i < num - 1; i++) {
        string += string;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
