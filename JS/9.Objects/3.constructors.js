let user = {
    name: 'rohan',
    age: 22
}

let User = function(name){
    this.name = name,
    sayHi = function(){
        console.log(`${this.name} says hello`)
    }
}
let x=[];
let str = ['aman', 'chirag', 'nikhil'];
for(i of str){
    x.push(new User(i));
}
console.log(x);