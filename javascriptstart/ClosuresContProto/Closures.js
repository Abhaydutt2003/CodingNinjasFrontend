var c = 30;
function outer() {
    var a = 10;
    var inner = function () {
        var b = 5;
        console.log(a + " " + b + " " + c);
        a++; b++; c++;
    }
    return inner;
}
var fn = outer();
fn();
fn();
fn = outer();
fn();

//above is the concept of clousers

function testLoop() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}//see the difference after replacing let with var

testLoop();

// var arr = new Array(6);
// for(let i = 0;i<6;i++){
//     i++;
//     arr[i-1] = i;
//     i--;
// }
// console.log(arr);



var arr = [1, 2, 3];
console.log(arr);

var date = new Date();
console.log(date);
var i = 10 + 3 + "9";
console.log(i);

