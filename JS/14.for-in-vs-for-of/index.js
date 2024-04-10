let arr = ['a', 'b', 'c'];

for(let i = 0; i< arr.length;i++){
    console.log(arr[i])
}

for(let i of arr){
    console.log(i)
}
//map, set, string, array

for(let i in arr){
    console.log(i)
}

for(let i of Object.keys(arr)){
    console.log(i)
}

console.log(typeof arr)

//for of -> arrays, strings
//for in -> objects 