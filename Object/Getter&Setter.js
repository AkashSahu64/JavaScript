/*  ------Assignment-------

Create a simple JavaScript program that models a student object with the following properties:

1. name (string): Name of the student.
2. age (number): Age of the student.
3. grade (string): Grade of the student.

Implement the following using Getter and Setter methods:

1. Create Getter and Setter methods for each property (name, age, grade).
2. The Getter method for name should ensure that the name is always capitalized.
3. The Setter method for age should ensure that the age is always a positive number.
4. The Setter method for grade should ensure that the grade is always a valid grade (e.g., A, B, C, D, F). */

const student = {
    _name : " ",
    _age : 0,
    _grade : " ",

    get name(){
        return this._name;
    },

    set name(newName) {
        this._name = newName.charAt(0).toUpperCase() + newName.slice(1);
    },

    get age(){
        return this._age;
    },

    set age(newAge){
        if(newAge >= 0){
            this._age = newAge;
        }else
        console.log("Age can not be negative or string");
    },

    get grade(){
        return this._grade;
    },
    
    set grade(newGrade){
        let validGrade = ['A', 'B', 'C', 'D', 'E', 'F'];
        if(validGrade.includes(newGrade)){
            this._grade = newGrade;
        }else{
            console.log("Grage dose not contains ['A', 'B', 'C', 'D', 'E', 'F']");
        }
    },
    display(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

student.name = "akash"
student.age = 21
student.grade = "B"

student.display();