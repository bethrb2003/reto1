const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
} else {
    const minNum = Math.min(num1, num2);
    const maxNum = Math.max(num1, num2);
    let suma = 0;
    
    for (let i = minNum; i <= maxNum; i++) {
        suma += i;
    }
    return suma;
}   
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
