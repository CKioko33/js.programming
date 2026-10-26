// Importing the full Utility module on the same directory as the current file. The require function is used to import the module, and the result is assigned to a variable named utility. This allows you to access the exported functions from the Utility module using the utility variable.

const utility = require("./Utility.js");//Importing the full Utility module on the same directory as the current file. The require function is used to import the module, and the result is assigned to a variable named utility. This allows you to access the exported functions from the Utility module using the utility variable.

let result = utility.square(5);
console.log("The square is: " + result);

let cubeResult = utility.cube(3);
console.log("The cube is: " + cubeResult);

let sum = utility.calculate(10, 5, '+');
console.log("The sum is: " + sum); 

//Importing specific functions from a module. Most preferred way to import specific functions from a module is to use destructuring assignment. This allows you to extract only the functions you need from the module, making your code cleaner and more efficient. Here's how you can do it:  
const { square, cube } = require("./Utility.js");

let squareResult = square(4);
console.log("The square is: " + squareResult);  