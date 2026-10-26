//Hirarchical Inheritance: In this example, we have a base class called Person, and two derived classes called Student and Teacher. The Student and Teacher classes inherit from the Person class, which means they can access the attributes and methods of the Person class. Additionally, each derived class has its own specific attributes and methods.
//Create a class called Person with attributes name and age, and methods eat().

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Student extends Person {
    //attributes: grade
    constructor(name, age, grade) { //Adding grade attribute to the Student class
        super(name, age);//Calling the constructor of the parent class (Person) to initialize name and age
        this.grade = grade; //Initializing the grade attribute specific to the Student class
    }
    //methods: study()
    study() { //Defining the study method specific to the Student class
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}   
    
class Teacher extends Person {
    //attributes: salary
    constructor(name, age, salary) { //Adding salary attribute to the Teacher class
        super(name, age);//Calling the constructor of the parent class (Person) to initialize name and age      
        this.salary = salary;
    }   
    //methods: teach()
    teach() { //Defining the teach method specific to the Teacher class
        console.log(`${this.name} is teaching.`);
    }
}

let student = new Student("Alice", 20, "A"); //Creating an instance of the Student class with name "Alice", age 20, and grade "A"
console.log(student);
student.eat(); //Calling the eat method inherited from the Person class
student.study(); //Calling the study method specific to the Student class

let teacher = new Teacher("Bob", 30, 50000); //Creating an instance of the Teacher class with name "Bob", age 30, and salary 50000
console.log(teacher);
teacher.eat(); //Calling the eat method inherited from the Person class
teacher.teach(); //Calling the teach method specific to the Teacher class
