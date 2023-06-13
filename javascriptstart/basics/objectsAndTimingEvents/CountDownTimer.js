var sec = 5;
function countDown() {
    console.log(sec);
    sec--;
    if (sec == -1) {
        console.log("Time is up!!!");
        clearInterval(id);
    }
}
var id = setInterval(countDown, 1000);

