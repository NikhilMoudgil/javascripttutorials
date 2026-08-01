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

//************* Memory ************************//
// stack (primitive) , heap (non primtive)
// primitive Memory
let myYoutubeName = "MuscleMatrixTurbo"
let anotherName = myYoutubeName;
console.log(anotherName);

anotherName = "SoloSyncGaming";
console.log(myYoutubeName);
console.log(anotherName);
//non primitive value 
let user1 ={
    email: "nikemail@gmail.com",
    upi:"user@oksbi"
}
let user2 = user1;
console.log(user2.email,",",user2.upi);
user2.email="useremail@yahoomail.com"
console.log(user1.email); 
console.log(user2.email);

/* In stack we get a copy so changes made to copy not to actual variable 
whereas in Heap we get referance to actual variable so changes made to actual variable */