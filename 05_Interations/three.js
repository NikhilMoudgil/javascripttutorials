/*// for of loop
//for array
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
//for strings
const greetings ="Hello World"
for (const greet of greetings) {
    console.log(`Each Char is ${greet}`);   
}
*/
//Maps -> Object That Holds Key-Value pair
const map = new Map()
map.set('In',"India")
map.set('UK',"United Kingdom")
map.set('CH',"China")
for (const key in map) {
    console.log();
}
// Note- > maps are not iteratable


console.log(map);
// Basic to print maps but this will give as array
for (const key of map) {
    console.log(key);
}
// for Key value pair
for (const [Key,value] of map) {
    console.log(Key,':-',value);
    
}
// forof on object
const myObj= {
    'Game1':'NFS',
    'Game2':'PUBG'
}

//This wont work for objects
for (const [key,value] of myObj) {
    console.log(key , value);
    
}
for (const key in map) {
    console.log();
}
// Note- > maps are not iteratable


