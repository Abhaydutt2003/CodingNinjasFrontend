// function Vehicle(name){
//     this.name = name;
//     console.log(this);
// }
// new Vehicle("car");

// function ask(){
//     console.log(this, this.name);
// }
// ask();//this function is being called in the global context.

var abhay = {
    name:"Abhay",
    greet:function(){
        console.log("hello",this);
    }                                             //implicit binding example
}
abhay.greet();
var localFunc = abhay.greet;


localFunc();//this will be called in the global context
//as a workaround we have hardbinding


console.log("Hard bind");
var func = abhay.greet.bind(abhay);              //what bind actually does is, it returns a new function.
func();                                          //in which we can pass the value of this. similar to 
                                                 //explicit binding


//whenever we want to tell what the value of this will be, it 
//depends upon where and how the function is being called.

console.log("Example of explicit binding");

const john = {
    name:"John"
}

function funct(){
    console.log(this,this.name);
}

// funct.call(john);   // or use the apply
funct.apply(john);



//why exactly bind???

const Ankita = {
    name:"Ankita",
    greet:function(){
        console.log(this, this.name);
    }
}

//setTimeout(Ankita.greet,1000);//the greet function in class Ankita will actuall be called in the global context

// as a workaround

//setTimeout(Ankita.greet.bind(Ankita),1000);


var person = {
    name:"aBC",
    ask:function(){
        console.log(this);
    }
}

new (person.ask.bind(person))();

person.ask();
var callingOutside = person.ask;
//callingOutside();//will print as a global function
callingOutside.call(person);
var bindFunc = person.ask.bind(person);
bindFunc();
