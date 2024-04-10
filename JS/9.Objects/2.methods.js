let user = {
    name: 'rohan',
    age: 22,
    sayHi: function(){
        console.log(this.name + 'says Hello')
    }
}

let admin = user;

user = null;

try {
   admin.sayHi(); 
} catch (error) {
    console.log(error);
}