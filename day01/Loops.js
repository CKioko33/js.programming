// For loop

for (let i = 0; i < 5; i++) {
    console.log("Hello, World!");   
}

console.log("----------");

// While loop   
for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break; // Exit the loop when i equals 5
    }
}

console.log("----------");

for (let i = 1; i < 10; i++) {
    if (i == 5 || i == 7) {
        continue; // Skip the iteration rest of the loop when i equals 5 or 7             
    }
    console.log(i); 
}

console.log("----------");
// FOR..OF loop
let numbers = [1, 2, 3, 4, 5];  
for (let number of numbers) {   
    console.log(number);
}

//For..of loop with string
let str = "Hello";  
for (let char of str) {
    console.log(char);
}   