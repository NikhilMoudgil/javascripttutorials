// For Loop 
// basic syntax

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}
//Curly braces are the block scope/Local scope
//basic loop function
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

//console.log(element); this gives error because it has block scope
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best");
        
    }
    console.log(element);
}
// break// continue
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best  ");
        break;
        
    }
    console.log(element);
}
//loopsinside loops
for (let i = 0; i <=10; i++) {
console.log(`Outer Loop Value: ${i}`);

for (let j = 0; j <10; j++) {
   console.log(`Inner Loop Value:${j}and Inner Loop ${i}`); 
   }
}*/

// Main Content On array 
let myArr=["Ironman","Hulk","Thor"]
console.log( myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element); 
}