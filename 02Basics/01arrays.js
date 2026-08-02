//Array
const myArr=[0,1,2,3,4,5];
console.log(myArr[0]);
//we can access value from array by using its index number
//Shallow copy -> A shallow copy of an object is a copy whose property share same referance point 
//Deep copy  of an object is a copy whose property do not share the same referance point
const myHeros = ["Hulk","thor","ironman"]
console.log(myHeros)

const newArr = new Array(1,3,5,6);;
// array methods
//push value
myArr.push(6)
myArr.push(8)
console.log(myArr);
//pop value 
myArr.pop()
 console.log(myArr);

myArr.unshift(0)
console.log(myArr);
myArr.shift(0)
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newestarray = myArr.join()
console.log(myArr);
console.log(typeof newestarray);
console.log(newestarray);

// Slice , spice -> Splice manipulates the orignal array and it includes last range  whereas 
// slice manipulates or gets elements from the copy of array  and doesn't include last range of array 
console.log("A", myArr);
const myn1= myArr.slice(1,3)
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);

console.log(myn2);






 