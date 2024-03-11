function dummyFunc(){
  console.log('this is a dummy function')
}

//1. on button click

document.getElementById("button").click(dummyFunc);

//2. Js invoked 

dummyFunc();

//3.self Invoked

(function dummyFunc(){
  console.log('this is a dummy function')
})();
