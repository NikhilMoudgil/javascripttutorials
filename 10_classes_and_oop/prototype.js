
let myName ="Nikhil   "

console.log(`Length including Spaces${myName.length}`);
console.log(`Length excluding Spaces${myName.trueLength()}`);
// we need to create a method 

let myIdles = ["Gandhi","Bose"];

let idlePwr={
    Gandhi:"Peace",
    Bose:"Voilence",

    getGandhiPower:function(){
      console.log(`Gandhi Power is ${this.Gandhi}`);
    }
}
//method  to add some method to object

Object.prototype.nikhil = function(){
    console.log(`Nikhil is Everywhere`); 
}// we created a function/property in parent objects  thus accessed by all
myIdles.nikhil();


Array.prototype.heyNikhil =function(){
    console.log("Nikhil Said Helllow  there");
    
}// this property given to array thus can only by accessed and object is at top 
myIdles.heyNikhil();
//idlePwr.heyNikhil();
//-> INheritance-- old approach

const user={
    name:"SoloSync",
    email:"solo@google.com"
}
const teacher ={
    makeVideo : true
}

const TeacherAssist ={
   isAvailable: false
}

const TAsupport ={
    makeAss: 'Js Assignment',
    FullTime: true,
   // __proto__: TeacherAssist
}

//teacher.__proto__=  user;

// modern Syntax
Object.setPrototypeOf(TeacherAssist,teacher)


let anotherUname="SoloSyncGaming    ";

String.prototype.trueLength = function () {
     console.log(`${this}`);
    console.log(`True Length is :${this.trim().length}`);
    
}
anotherUname.trueLength();
"Nikhil   ".trueLength;
"ColdCoffee  ".trueLength;
myName.trueLength();