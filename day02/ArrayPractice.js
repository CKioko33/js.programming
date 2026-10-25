// Create an array with different data types

let elements = ["Java", 1, 2.5, true, false, "python"];
console.log(elements); // ["Java", 1, 2.5, true, false, "python"]

console.log("-----------------------------------");
// Accessing elements in the array using index

let students = ["John", "Jane", "Jim", "Jill"];
console.log(students);

for (let i = 0; i < students.length; i++) {
    console.log(students[i]); // John, Jane, Jim, Jill
}

console.log("-----------------------------------");
// Using for..of loop to iterate through the array  

for (let student of students) {
    console.log(student); // John, Jane, Jim, Jill
}

console.log("-----------------------------------");
//Getting the length of the array using the length property
let employees = ["Alice", "Bob", "Charlie", "David"];
console.log(employees.length); // 4
console.log(employees);

console.log("-----------------------------------");
//Changing the value of an element in the array using its index
employees[3] = "Steve";
console.log(employees); // ["Alice", "Bob", "Charlie", "Steve"]   

console.log("-----------------------------------");
//Adding a new element to the end of the array using the push() method
employees.push("Eve");
console.log(employees); // ["Alice", "Bob", "Charlie", "Steve", "Eve"]  

console.log("-----------------------------------");

//Adding a new element to the beginning of the array using the unshift() method
employees.unshift("Frank");
console.log(employees); // ["Frank", "Alice", "Bob", "Charlie", "Steve", "Eve"] 

console.log("-----------------------------------");
//Removing the last element from the array using the pop() method
employees.pop();
console.log(employees); // ["Frank", "Alice", "Bob", "Charlie", "Steve"]

console.log("-----------------------------------");
//Removing the first element from the array using the shift() method
employees.shift();
console.log(employees); // ["Alice", "Bob", "Charlie", "Steve"] 


