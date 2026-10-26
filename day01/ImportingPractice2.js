//Importing a module under different directory. The required function is used to import the module, and the result is assigned to a variable named utility. This allows you to access the exported functions from the Utility module using the utility variable.
const {calculate, square} = require("../day02/Utility.js");//Exit current directory day02 "../day02/Utility" and go to day01 directory to import the Utility module.
const result = calculate(10, 5, '+');
console.log("The sum is: " + result);

const squareResult = square(4);
console.log("The square is: " + squareResult);