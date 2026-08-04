// Scopes in JavaScript
let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);
//Case 1 
if(true){
    let a=10
    const b=20
    var c=30
}

//console.log(a);// it will give error as scope is only within if block for let
//console.log(b);// it will give error as scope is only within if block for const
console.log(c);

// Case 2 -> Scope for Function inside Function(Nested Function)
// This code will generate some errors due to the scope 
function one(){
    const username ="Nikhil";

    function two(){
        const website="Github";
        console.log(username);
    }
    console.log(website);
    two();
}
one()
// now error will go cause now website is not fetched
function one(){
    const username ="Nikhil";

    function two(){
        const website="Github";
        console.log(username);
    }
    //console.log(website);
    two();
}
one()

if(true){
    const username ="Nikkhil"
    if(username==="Nikkhil"){
        const website =" youtube"
        console.log(username+ website);
    }
   // console.log(website);  // error as website's scope is within inner if
}
//console.log(username); // error as username's scope is also withinin if

//*************Interesting Bonus******************/
// it is only a function or technique for funtion
// we can access the function before the function definition
addone(5)
function addone(num){
    return num+1;
}
//addone(5)
// It is the Second Technique 
// in this we cannot acces it 
//addtwo(5)
const addtwo = function(num){
    return num+2;
}
addtwo(5)
