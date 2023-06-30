var heading = document.getElementById('One');


heading.style.color = 'purple';
heading.style.backgroundColor = 'cyan';

var headings = document.getElementsByTagName('h1');

headings[1].innerText = "Second heading";
headings[0].innerText = "First heading";

headings[1].style.border = '3px black solid';

var para = document.getElementsByClassName('para');


para[0].style.backgroundColor = "yellow";

var secHeading = document.querySelector('#Two');

secHeading.style.backgroundColor = 'lightgray';


//button part

// var helloBtn = document.getElementById('btn');

// helloBtn.addEventListener('click', function (){
//     alert('hello with js');
// });



// we will need to use .onload because 
// the line document.getElementById('btn');
//executes before the dom even loads




window.onload = function(){
    var helloBtn = document.getElementById('btn');
    helloBtn.addEventListener('click',fn);
    helloBtn.addEventListener('click',fn2);
}

function fn(){
    alert('Hello with js');
}
function fn2(){
    alert("byeee");
}
