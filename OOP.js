//Task 1: Code a Person class. Add parameters name, age, and energy with 2 methods sleep and doSomethingFun. sleep method increase energy by 10
//and doSomethingFun decreases energy by 10.
//Task 2: Code a Worker class. Add subclass that inherits Person class and name it Worker. Include 2 additional parameters in the constructor, xp and hourlyWage
//Task 3: Code an Intern object, run methods. Instantiate the Worker class to new intern object with name: Bob, age: 21, energy: 110, xp: 0, hourlyWage: 10
//run the goToWork method on the intern object and return intern object.
//function intern(){}
//Task 4: Code a manager object, methods.
//Instantiate the Worker class to new manager object with name: Alice, age: 30, energy: 120, xp: 100, hourlyWage: 30
//run the doSomethingFun method on the manager object and return manager object.
//function manager(){}




//Practice

// Task 1: Code a Person class

// Task 2: Code a Worker class

// Task 3: Code an intern object, run methods
function intern() {

}

// Task 4: Code a manager object, methods
function manager() {

}





//My Solution
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name,
        this.age = age,
        this.energy = energy
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun(){
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
        
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {

    var intern = new Worker("BoB", 21, 110, 0, 10);
    /*intern.name = "Bob";
    intern.name = 21;
    intern.name = 110;
    intern.name = 0;
    intern.name = 10;
    */
    intern.goToWork();
    return intern;

}

// Task 4: Code a manager object, methods
function manager() {
   var manager = new Worker("Alice", 30, 120, 100, 30)
    /*var manager = new Worker();
    manager.name = "Bob";
    manager.name = 21;
    manager.name = 110;
    manager.name = 0;
    manager.name = 10; fail, forgot to change the property*/
    manager.doSomethingFun();
    return manager;
}

console.log(intern());
console.log(manager());
