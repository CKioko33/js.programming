/*
Attributes:
    employeeName
    salary
    ...
    Methods:
    work()
    ...
*/

class Employee {
    constructor(employeeName, salary) { // Constructor method to initialize the attributes      
        this.employeeName = employeeName; //Instance variable to store the employee's name
        this.salary = salary;//Instance variable to store the employee's salary
    }

    work(){ // Method to simulate the employee's work.
        console.log(`${this.employeeName} is working.`);
        console.log(`${this.employeeName} is earning ${this.salary}.`);
    }
}
    let employee1 = new Employee("John Doe", 50000); //Creating an instance of the Employee class
    let employee2 = new Employee("Jane Smith", 60000); //Creating another instance of the Employee class
   
    console.log("Employee Name: " + employee1.employeeName); // Accessing the employeeName attribute
    employee1.work(); // Calling the work method
    
    console.log("Employee Name: " + employee2.employeeName); // Accessing the employeeName attribute
    employee2.work(); // Calling the work method

    console.log("----------------------------------");

    /*
        Create a class called "Car" with attributes like "make", "model", and "year". Include methods to start the car and display its details. Create instances of the Car class and demonstrate the usage of its methods.
    */

class Car {
    constructor(make, model, year) {
        // Store the values passed in when a new Car is created.
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // A method is a function that belongs to a class.
    start() {
        console.log(`The ${this.make} ${this.model} is starting.`);
    }

    // Use this object's properties to print its details.
    displayDetails() {
        console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }
}

// Create two separate Car objects using the class as a blueprint.
const car1 = new Car("Toyota", "Corolla", 2022);
const car2 = new Car("Honda", "Civic", 2024);

// Call each object's methods to display information and start the car.
car1.displayDetails();
car1.start();

car2.displayDetails();
car2.start();
