let score = 50;
if (score >= 60) {
    console.log("You passed the exam!");
} else {
    console.log("You failed the exam.");
}

console.log("----------");

//Multiple conditions

let number = 1000;
if (number > 0) {
    console.log("The number is positive.");
}else if (number < 0) {              
        console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

console.log("----------");

//Nested if statements  
score = 50;

// Check if the score is within the valid range (0-100)
if (score >= 0 && score <= 100) {
    if (score >= 60) {
        console.log("You passed the exam!");
    } else {
        console.log("You failed the exam.");
    }
} else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
    }