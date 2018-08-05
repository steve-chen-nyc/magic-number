var R = require('ramda');

var getMagicNumber = R.compose(
    R.reduce( sumNumbers, 0 ),
    R.filter( isNumberValid )
)

var printMagicNumber = R.pipe(
    getMagicNumber,
    constructMsg,
    console.log
);

function isNumberValid(x) { return R.gte(x, 10) && R.lte(x, 20)};
function sumNumbers(x,y) { return x + y; }
function constructMsg(v) { return `The magic number is: ${v}`; }

var numbers = [4,10,0,27,42,17,15,-6,58];

printMagicNumber( numbers );

module.exports = getMagicNumber;
