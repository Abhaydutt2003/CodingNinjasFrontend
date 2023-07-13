// var var1 = 9;
// console.log(window.var1);

(function () {
    var a = 2;
    console.log(a);
})();

console.log(a);

//console.log(b);

//above is iife
//below alternate for iife

{
    let a = 3;
    console.log(a);
}

var a = 4;
console.log(a);


var arr = [1,2,3];
var a = (function(){
    return typeof arguments;
 })();
 console.log(a);
