const ftoc = function(f) {
const celsius = ((f - 32) * 5/9).toFixed(1);
return parseFloat(celsius)
};

const ctof = function(c) {
const fahrenheit = ((c * 9/5) + 32).toFixed(1);
return parseFloat(fahrenheit);
};

const result1 = ftoc(32)
const result2 = ctof(0)


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
