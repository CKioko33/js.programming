let school = "CYDEO School";

console.log(school);
console.log(typeof school);

console.log(school.length); // 5

console.log(school.charAt(0)); // C

console.log("-----------------------------");

//Another way to retrieve character. You can use the index of the character in the string
console.log(school[0]); // C

console.log("-----------------------------");

//Retrieve the last character of the string
console.log(school.charAt(school.length - 1)); // O 

console.log("-----------------------------");

//Loop that iterates through each character of the string
for(let i = 0; i < school.length; i++) {
    console.log(school[i]); // C Y D E O}
}

console.log("-----------------------------");
//Strings are immutable, meaning you cannot change a character in a string directly. You can create a new string with the desired changes instead.
school.toLowerCase(); // cydeo school will be printed to the console, but the original string remains unchanged. Used to create a new string with the desired changes instead.
console.log(school); // CYDEO School

console.log("-----------------------------");
//To change the string to lowercase, you can assign the result of the toLowerCase() method to a new variable or reassign it to the original variable.
school = school.toLowerCase(); // cydeo school
console.log(school); // cydeo school

console.log("-----------------------------");
//To change the string to uppercase, you can use the toUpperCase() method.
school = school.toUpperCase(); // CYDEO SCHOOL
console.log(school); // CYDEO SCHOOL    

console.log("-----------------------------");
//To compare two strings, you can use the === operator. This will return true if the strings are equal and false if they are not.
let actualREsult = "java";
let expectedResult = "Java";
console.log(actualREsult === expectedResult); // false

//To compare two strings ignoring case, you can use the toLowerCase() or toUpperCase() method on both strings before comparing them.
console.log(actualREsult.toLowerCase() === expectedResult.toLowerCase()); // true   

console.log("-----------------------------");
//Replace a character or substring in a string with another character or substring using the replace() method. This method returns a new string with the specified replacements, leaving the original string unchanged.
let str = "python python"

//Replace the first occurrence of "python" with "javascript"
str.replace("python", "javascript"); // javascript python will be printed to the console, but the original string remains unchanged.   
console.log(str); // python python              

console.log("-----------------------------");
//To replace one character with another character, you can use the replace() method as well.
str = str.replace("python", "javascript"); // javascript javascript will be printed to the console, but the original string remains unchanged.
console.log(str); // javascript python

console.log("-----------------------------");
//To replace all occurrences of a character or substring in a string, you can use the replaceAll() method. This method returns a new string with all occurrences of the specified character or substring replaced, leaving the original string unchanged.
str = str.replaceAll("python", "javascript"); 
console.log(str); // javascript javascript  

//Another way to replace all occurrences of a character or substring in a string is to use a regular expression with the global flag (g) in the replace() method. This will replace all occurrences of the specified character or substring, leaving the original string unchanged.
str = str.replace(/python/g, "javascript");//g:global flag 
console.log(str); // javascript javascript  

console.log("-----------------------------");
//Substring is a part of a string. You can extract a substring from a string using the substring() method. This method takes two arguments: the starting index and the ending index (exclusive) of the substring you want to extract. The original string remains unchanged.
let email = "cydeoschool@gmail.com";

//Retrieve the domain name from the email address
let domain = email.substring(email.indexOf("@") + 1); // gmail.com; substring returns a new string, leaving the original string unchanged.
console.log(domain); // gmail.com

console.log("-----------------------------");
//String concatenation is the process of combining two or more strings into a single string. You can concatenate strings using the + operator or the concat() method. The original strings remain unchanged.
let employeeName = "John";
let employeeSalary = 50000;

//Use the `${}` syntax to concatenate strings and variables in a single string. This is called string interpolation.
console.log(`My name is ${employeeName} and my salary is ${employeeSalary} US dollars.`); // My name is John and my salary is 50000 US dollars  .
