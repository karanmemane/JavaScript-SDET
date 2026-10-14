//class and object in typescript

class Person { // A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have.
    name: string; //property of the class
    age: number; //property of the class

    constructor() { //constructor is a special method that is called when an object is created from the class. It is used to initialize the properties of the class.
        this.name = "Karan"; //initializing the property
        this.age = 25; //initializing the property
    }
}   

let person: Person = new Person();
console.log(person.name);
console.log(person.age);
