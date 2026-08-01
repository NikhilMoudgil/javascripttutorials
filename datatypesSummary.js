//primitive  - these are call by value
// String , number , boolean , null, undefined , symbol ,Bigint 
// javascript is a dynamically types  language 
//number->
const score = 100 
const scorevalue = 100.3
//boolean=>
const isLoggedIn = false
// null ->
const temp = null
//undefined
let userEmail;
let userEmail1 = undefined

//symbol->
const id = Symbol('123');
const id2 = Symbol('123')
console.log(id === id2);
//big int ->
const bignum = 48468387828783474n

// referance or non primitive 
// array , objects , functions 
//array
const  heros = ["Spiderman", "Ironman" ,"Thor"];
//object
let myobject={
    name: "Nikhil",
    age:  23, 
}
//function 
const myFunction = function(){
    console.log("Hello World ");
}
console.log(typeof(myFunction)); 
// return type of referance datatypes is function and for function it is object function

