const user ={
    uname:"Nikhil",
    pass:123,

   // getUserData: function(){
       // console.log("Got UserDetails From database");
        //console.log(`Username:${this.uname}`);
     //console.log(this);//this will give the current context
   //}
}
//console.log(user.uname);
//console.log(user.getUserData());

function User(uname ,pass){
    this.pass= pass;
    this.uname=uname;

    this.greeting = function(){
        console.log(`Welcome ${this.uname}`);
        
    }
    return this;
}

const userOne=  new User("Nikhil",123);
// constructor give you a new copy of a function or object
/*const usertwo= new User("Moudgil",234)
console.log(userOne);
console.log(usertwo);*/
//Step One -> An empty object is created when we use this  which is an  instance 
// Step 2 -> Constructor Function is called due to new and it pack the arguments
// step 3 -> arguments get injected to this keyword
// step-3 -> we get the arguments from function
console.log(userOne.constructor);