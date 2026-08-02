const omegle = new Object()
const omegle2 = {}
omegle2.id = "123"
omegle2.name = "Nammy"
omegle2.isLoggedin = false
//console.log(omegle2);
const regularUser ={
    email:"nammy@.com",
    fullname: {
        UserFulLName:{
            FirstName:"Nikhil",
            LastName:"Moudgil"
        }
    }
}
//console.log(regularUser.fullname.UserFulLName.FirstName);// '?' is used for optional chaining

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3 ={obj1,obj2}
console.log(obj3);
// Assign we can assign multiple source object values to traget object
const obj4 =Object.assign({},obj1,obj2)
console.log(obj4);
//Spread
const obj5 = {...obj1 ,...obj2}
console.log(obj5);

const users =[
    {
        Id:1,
        email:"Nik@gmail.com"
    },
    {
        Id:2,
        email:"gil@.com"
    }
]

console.log(users[1].email)
console.log(omegle2);
console.log(Object.keys(omegle2));// to access keys of the object 
console.log(Object.values(omegle2));// to access values of the object 

console.log(Object.entries(omegle2)); // get key-value pair and Arrays

console.log(omegle2.hasOwnProperty('isLoggedin'));
console.log(omegle2.hasOwnProperty('isLogged'));


