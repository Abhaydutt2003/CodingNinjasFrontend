// var a = 10;
// var b = a;
// b++;
// console.log(a,b);

//primitive are always deep copy


// var Abhay={
//     name :"Abhay",
//     age :20 
// }
// var Ankita = Abhay;
// Ankita.name = "Ankita"
// console.log(Abhay,Ankita);


//non primitive are always shallow copy

var Abhay = {
    name: "Abhay",
    age: 20
}
//var Ankita = {...Abhay};
var Ankita = Object.assign({}, Abhay);
Ankita.name = "Ankita";
Ankita.age = 19;
console.log(Abhay, Ankita);

//same goes for arrays
var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1];
arr2.push(5);
console.log(arr1, arr2);


console.log("");
//concept of arrow function
var ans = (x, y) => {
    return x + y;
};
var c = ans(3, 4);
console.log(c);


