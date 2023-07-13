var mutliply = (x, y) => {
    return x * y;
}

var mutliply2 = (x, y) => x * y;

var double = x => 2 * x;

console.log(mutliply2(4, 2));

console.log(mutliply(2, 3));

console.log(double(4));

function Person(name) {
    this.name = name;
    console.log(this);

    // setTimeout(function () {
    //     console.log(this);
    // }, 1000);

    setTimeout(() => {console.log(this)},1000);
    //arrow functions do not have their own bindings..
}
var p = new Person("Abhay");
