const getMagicNumber = (nums) => {
    return nums.filter(isNumberValid).reduce(sumNumbers,0);
}

const printMagicNumber = (nums) => {
    const magicNumber = getMagicNumber(nums)
    const message = constructMsg(magicNumber);
    console.log(message);
}

function isNumberValid(x) { return x <= 20 && x >= 10};
function sumNumbers(x,y) { return x + y; }
function constructMsg(v) { return `The magic number is: ${v}`; }

var numbers = [4,10,0,27,42,17,15,-6,58];

printMagicNumber( numbers );

module.exports = getMagicNumber;
