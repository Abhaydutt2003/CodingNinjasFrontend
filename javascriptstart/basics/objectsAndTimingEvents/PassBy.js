var x = 4;
var y = ["Abhay"];
var z = { first: true };
function demo(a, b, c) {
    a = 5;
    b.push("Ankita");
    c.first = false;
}
console.log(x, y, z);
//after calling
demo(x, y, z);
console.log(x, y, z);