const user ={
    username:"Nikhil",
    id:123,

welcomemsg: function(){// 'this' is used to reffer current context we can check that
    console.log(`${this.username}, Welcome to website`); 
    console.log(this);// it will give local current context
    
}
}
// if we comment the global context then value of this will be empty 
user.welcomemsg()
user.username="sam"
user.welcomemsg()
//console.log(this);// this will give global current context 
// Interesting note -> In  browser global object is window object which help us capture window events 
 
//********this inside a function */


function code(){
    let username="Nikhil"
    //console.log(this.username);// This cannot be used in function
 }
 code()
// second method to declare funtions
 const code = function(){
    let username="nikhil";
    console.log(this.username);// This cannot be used in function
 }
 code()

 //------------function definition using arrow function--------------//
 const code= ()=>{
    let username="Nikhil"
    console.log(this.username);
     console.log(this);
 }
 code();

 ()=>{} // syntax of arrow function
 // basic arrow function
 const addtwo= (num1,num2)=>{
            return num1+num2
 }
 console.log(addtwo(4,5));

// implicit return arrow function
const addone=(num1,num2)=>num1+num2
 console.log(addtwo(6,5));

 // if we use curly braces then we have to use return keyword 
 // whereas if we use parenthesis we dont need return
 const addone=(num1,num2)=>(num1+num2)
 console.log(addtwo(6,5));

 // Note-> these are helpful while returning objects as
 const addone=(num1,num2)=>({username:"Nikhil"})
 console.log(addtwo(6,5));

