// Object De- Structuring
const myObj={
    name:"Nikhil",
    id:1 
}
const course ={
    coursename: "JsTutorials",
    courseprice: 0,
    instructor:"Nikhil"
}
console.log( course.instructor);//Basic Method 

const{instructor: inst} = course;// de-structure using alias
console.log(inst);


