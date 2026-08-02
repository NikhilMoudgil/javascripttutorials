// Singleton -> Object made of constructers are Singleton
Object.create//constructer Method
// Object Literals 
//SYmbol
const mySym=Symbol("Key1")

const JsUser = {
    name:"Nikhil",
    "FullName": "Nikhil Moudgil",
    [mySym]:"Key1",// syntax to use symbol
    age:23,
    location:"Chandigarh",
    email:"nikhil@google.com",
    isLoggedin: false
}
/*// we can access the object element with using '.' and '[]' and mostly use '.' 
console.log(JsUser.email);
//console.log(JsUser[email]); It will give an error as with square Brackets it can only access key as a string
// Because Js See object keys as Strings
console.log(JsUser["email"]);
console.log(JsUser["FullName"]);
//Syntax too access object element a symbol
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);*/
 JsUser.email="nikhil@gemini.com";// we can override the data of object using keys as this
 console.log(JsUser["email"]);
 
 //Object.freeze(JsUser)// freeze is used to freeze the object so that no changes can be overridden on the object
 JsUser.email="nikhil@Latent.com";
 console.log(JsUser["email"]);
 

JsUser.greeting  = function(){
    console.log("Hello Viwer");
    
}
JsUser.greeting2= function(){
    console.log(`Hello Js User , ${this.name}`);
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


    

