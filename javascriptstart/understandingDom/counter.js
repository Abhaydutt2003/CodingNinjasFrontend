var btn = document.getElementById('btn');
var i = 0;
var counter = document.getElementById('counter');

function fn() {
    i = i + 1;
    counter.innerText = "The counter has been clicked " + i + " times";
}
btn.addEventListener('click', fn);

