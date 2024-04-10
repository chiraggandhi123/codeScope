let user = {name: 'rohan', age: 22};

console.log(user.age);// dot property notation 
console.log(user["name"]);//

delete user.name;
console.log(user)

for(let key in user){
    console.log('key', key)
}