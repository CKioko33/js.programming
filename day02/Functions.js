/**
 * Prints a greeting and welcome message to the console.
 */
function greet() {  
    console.log("Hello!");
    console.log("Welcome to the JavaScript course.");
}
greet(); // Calling the function

console.log("------------------------------------------");
/**
 * Prints a greeting for the specified person.
 * @param {string} name - The name of the person to greet.
 */
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}
greetPerson();
greetPerson("Alice"); // Calling the function with an argument  

console.log("------------------------------------------");
//Returning values from functions
/**
 * Adds up to three numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {number} num3 - An optional third number; defaults to 0.
 * @returns {number} The sum of the provided numbers.
 */
function addNumbers(num1, num2, num3=0) { // Default value for num3 is 0  
    return num1 + num2 + num3;
}
let result = addNumbers(5, 10);
console.log("The sum is: " + result);   

//Method overloading is not supported in JavaScript, but we can achieve similar functionality using default parameters or by checking the number of arguments passed to the function. Here's an example of a function that behaves differently based on the number of arguments:
let x = addNumbers(5, 10, 30); // Calls the function with three arguments
console.log("The sum is: " + x);
