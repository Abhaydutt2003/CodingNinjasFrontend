//there is no concept of classes in js
//a workaround is to make a function

function createStudent(name, age) {
    let student = new Object();
    student.name = name;
    student.age = age;
    return student;
}

let student1 = createStudent("Abhay", 20);
//let student2 = createStudent("Ankita", 19);

console.log(student1);

//2nd way is to declare a function as a constructor....

function CreateStudent2(name, age) {
    this.name = name;
    this.age = age;                                        //this function will be considered as a const..
}

//if i use this as a normal function, then the this would actually refer to the global context

let student2 = new CreateStudent2("Ankita", 19);

console.log(student2);

// a quick mcq

var obj = {};
function A() { return obj; }
function B() { return obj; }
console.log(new A() == new B());
console.log(new A() === new B());


//now how do we add functions like get___???
function Vehicle(wheels, price) {
    this.numWheels = wheels;
    this.price = price;
    this.getPrice = function () {              //the limitation being that we will make multiple copies for 
        return this.price;                     //different copies in js , unlike java where we do not make multiple
    }                                          //copies of functions in classes. 
}
let car = new Vehicle(4, 500000);
console.log(car);
let funct = car.getPrice.bind(car);
console.log(funct());

// let funct = car.getPrice;
// funct();

//as a workaround for multiple copies of functions, we have prototypes
//every object made from the same const function will have the same prototype
//meaning every const function has its own prototype

Vehicle.prototype.getWheels = function () {
    //return this.numWheels;
    console.log(this.numWheels);
}

let bicycle = new Vehicle(2, 5000);

car.getWheels();
bicycle.getWheels();      //these two will actually refer to the same function in the prototype 

//firstly it will look if we have the function getWheels in Vehicle class itself or not..
//if not present,we will actually look in the prototype.
//if the method is not even present in the current Prototype, we will actually look in the prototype of the
//parent class if there is inheritance..


// we can even add properties on runtime..
Vehicle.prototype.color = "black";
console.log(car.color);
console.log(bicycle.color);

//interesting functions

console.log(car.__proto__ == Vehicle.prototype);                       //depricated
console.log(Object.getPrototypeOf(car) == Vehicle.prototype);          //should rather use this
console.log(Vehicle.prototype.isPrototypeOf(car));
console.log(car.hasOwnProperty('color'));
console.log(car.hasOwnProperty('price'));
car.color = "white";
console.log(car.color, car.hasOwnProperty('color'));

//Every function has a property called ‘name’. By default, the value of ‘name’ is set to the function's name.


// function Student(id, name, club){
//     this.id = id ;
//     this.name = name ;
//     this.club = club ;
//     // this.printDetails = function(){
//     //     console.log(this.id, this.name, this.club);
//     // }
// }

// Student.prototype.printDetails = function(){
//      console.log(this.id, this.name, this.club);
// };

// let raj = new Student(10,"Raj","cricket");
// let Rohan = new Student(11,"Rohan","Dance");

// var arr = [raj,Rohan];
// for(let i = 0;i<arr.length;i++){
//     arr[i].printDetails();
// };
// console.log("Hello");



//now as in java there is Object class, every object we make in js will inherit properties from Object class
//just like others we can also access the object prototype  and also add values on runtime in it

// let obj1 = new Object();
// console.log(Object.prototype.isPrototypeOf(obj1));             //example of direct inheritance

function A() {
    this.name = "A";
    this.color = "blue";
}
function B() {
    this.name = "B";
}
function C() {
    this.name = "C";
}

let obj1 = new A();
let obj2 = new B();
let obj3 = new Object();
let obj4 = new C();

A.prototype.color = "red";
B.prototype.color = "red";
Object.prototype.color = "pink";

console.log(obj1.color, obj2.color, obj4.color, obj3.color);

//Object -> the constructor function, every const function inherits property from it
//object -> basic key value pair , non primitive data type.


//to make things easier we have the conventional syntax

class Vehicle2{

    // constructor(name,wheels){
    //     this.name = name;
    //     this.wheels = wheels;
    // }

    getName(){
        return this.name;
    }
}

let maruti = new Vehicle2("Alto",4);
console.log(maruti);
//but deep down everything remains the same..
console.log(Object.getPrototypeOf(maruti) === Vehicle2.prototype);

// class Person {
//     constructor(name) { this.name = name; }
//  }                                             //not actually making a class, we are deep down usinf functions 
//  console.log(typeof( Person));                 //only


//a class cannot be called without the new keyword
//also class function are not hoisted
//another syntax to make class is var Vehicle  = class{};



