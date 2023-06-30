function test(){
    return this;
}

console.log(test() == window);