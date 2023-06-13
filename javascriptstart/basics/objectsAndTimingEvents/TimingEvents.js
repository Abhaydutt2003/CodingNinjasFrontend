var sec = 1;
function print(){
    
    console.log("on",sec,"hello");
    sec++;
    if(sec == 5){
        clearInterval(id);  
    }
}
//setTimeout(print,6000);
var id = setInterval(print,1000);