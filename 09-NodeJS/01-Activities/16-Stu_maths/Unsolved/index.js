// TODO: Import `maths.js`
const maths = require('./maths')
console.log('process.argv: ', process.argv)
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation = process.argv[2];
let numOne = parseInt(process.argv[3]);
let numTwo = parseInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

if (operation === 'sum') {
    console.log(maths.sum(numOne, numTwo));

}
else if (operation === 'difference') {
    console.log(maths.difference(numOne, numTwo));

}
else if (operation === 'product') {
    console.log(maths.product(numOne, numTwo));

}
else if (operation === 'quotient') {
    console.log(maths.quotient(numOne, numTwo));

}


