//if
/*const isUserLoggedIn = true 
if(2=="2"){
     console.log("Execute");
}
//strict equal is used when we counter different datatypes
if(2==="2"){
     console.log("Execute");
}
if(2!="3"){
     console.log("Execute");
}
//<,>,<=,>=,==,!= , ===(strict equal),!==
// If else
     const score =200 
/*if (score>100) {
     const power = "Fly"
     console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // BLock Scope*/
//ShortHand Notation
const balance = 10000
//if (balance>500) console.log("Test");// Implicit Scope and AUto Semicolon
//if (balance>500) console.log("Test2"), console.log("test3");

//Nesting
/*if(balance<500){
     console.log("Not less");
}else if(balance<700){
     console.log("Not less");  
}else{
     console.log("More than 1000");
     
}*/
//Multiple Condition
const isUserLoggedIn = true
const debitcard= true
const loggedInfromGoogle=false
const loggedInFromEmail= true

if(isUserLoggedIn && debitcard){
     console.log("Allow to buy");
}
if(loggedInfromGoogle || loggedInFromEmail){
     console.log("Allow to buy");
}




