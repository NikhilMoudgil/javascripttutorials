// Truthy value and Falsy Value 
/*const userEmail =[]// we dont even compare or assign true so we assume the string is truth 
//called truthy value

if(userEmail){
    console.log("Got the User Email");
}else{
    console.log("Dont Have User Email");
    
}
// Falsy Value -> false ,0 ,-0 ,BigInt 0n ,"" ,undefined ,NaN
//Truthy Value -> "0" , 'false', " ", [](emptyarray),{}(emptyobject),function(){}

// To check if array or objects are empty
if (userEmail.length===0) {
    console.log("Array is Empty");
    
}
const emptyobj={}
    if(Object.keys(emptyobj).length===0){
        console.log("Object is empty");
        
    }
/* False==0 -> True
false== ''-> True
0=='' -> true*/

//---------------------Nullish Coalescing Operator (??): null undefined made for these 2

let val1
val1 = 5??10;
val1 = null??10
var1 = undefined??10
console.log(val1);
//--------------- Terniary Operator
 //condition ? true:false
const price=100
price<=80? console.log("less that 80"): console.log("More than 80");

