// Error Handling in JavaScript
console.log("Test Started");

let result;
try {
    // Some code that might throw an error
    result = someFunction();
} catch (e) {
    console.log(`An error occurred: ${e}`);

}finally {
    console.log("Executing finally block");
}

console.log("Test Ended");

console.log("-----------------------------");

//  throw new Error("An exception occurred");
