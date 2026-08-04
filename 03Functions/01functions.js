function sayMyname(){
    console.log("Nikhil Moudgil");
}
sayMyname();//execution
sayMyname//referance

function addTwoNumber(num1,num2)//Parametersas
{
          console.log( num1+num2);
          
}
addTwoNumber(3,4);//Arguments
addTwoNumber(3,"4");// Conversion COnfusion
addTwoNumber(3,"a");// Conversion COnfusion
addTwoNumber(3,null);// Conversion COnfusion

/*const result = addTwoNumber(3,6)
console.log( result); error-> gives error*/
 function addTwoNumbers(num1,num2)//Parametersas
{
     let result= num1+num2;
    return result;
    console.log("Code after return which will note execute");
}
const result=addTwoNumbers(2,3)
console.log("Result=>",result);

// Another Method to define function
function loginuserMessage(username="Sam "){ // Here in this statement sam is default value
   /* if(username==undefined){
        console.log("Please Enter A UserNAme");
        return
    }*/
   if(!username){// ANother method of If
     console.log("Please Enter A UserNAme");
        return
   }
    return`${username}just logged in`;//Using Backticks
}

  console.log(loginuserMessage("Nikhil"));
  console.log(loginuserMessage());// It Will give me  Undefined as no arguments

// Case for Multiple Arguments  
// case 1
  function calculateCartPrize(...num1){ // Here '...' are rest operators and this operator 
    return num1                          // It converts collection of arguments into array       
  }
  console.log(calculateCartPrize(200,300,400,799));//Multiple Arguments
//Case2
function calculateCartPrize(val1,val2, ...num1){ // There are Multiple Parameters so first two values will 
                 return num1                   // go to val1 and 2 and rest in array              
  }
  console.log(calculateCartPrize(200,300,400,799));//Multiple Arguments


  //Objects in function
  // Case1
  const user ={
    username:"Nikhil",
    id: 1999
  }
  function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and Id is ${anyobject.id}`)

  }
   handleobject(user)
//case 2 passing object
handleobject({
    username:"Moudgil",
    id:200
})
// case3 passing array
const myarray =[ 200,300,400]

function returnSecondValue(getArray){
    return getArray
}
console.log(returnSecondValue(myarray));
