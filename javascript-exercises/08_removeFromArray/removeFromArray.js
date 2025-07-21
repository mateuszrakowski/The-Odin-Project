const removeFromArray = function(arr, ...args) {
    let newArr = arr.filter(item => !args.includes(item));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
