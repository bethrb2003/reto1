const removeFromArray = function(arr, ...params) {
    return arr.filter(item => !params.includes(item));
};

const result = removeFromArray([1, 2, 3, 4], 3);


// Do not edit below this line
module.exports = removeFromArray;
