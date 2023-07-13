class Vehicle {
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;                          //we cannot have more than one constructor in js
    }

    print() {
        console.log(this.numWheels, this.price);
    }
}

class car extends Vehicle {
    constructor(numDoors, price) {
        super(6, price);
        this.numDoors = numDoors;
    }

    print() {
        super.print();
        console.log(this.numDoors);
    }
}

let c = new car(5, 10000);
console.log(c);
c.print();