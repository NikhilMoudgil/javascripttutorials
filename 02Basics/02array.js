const myArr=[0,1,2,3,4,5];
const marvelheros=["Thor","Hulk","IronMan"]
const dcHeros=["Batman","Flash","SuperMan"]
//on Pushing an array into another array because array take evrything as an element 
//marvelheros.push(dcHeros);
//console.log(marvelheros);
//console.log(marvelheros[3][1]);
console.log(marvelheros.concat(dcHeros));
//Spread Operator-> Spreads all the elements of arrays together  
const allnewHeroes =  [...marvelheros , ...dcHeros]
console.log(allnewHeroes);
// Flat -> It is used to deal with situation of having multiple arrays inside one or nested array
// It can do this on depths 
const arr2 =[1,2,3,[4,5,6],7,[6,7,[8,9]]]
const realarr2  = arr2.flat(Infinity)
console.log(realarr2 );

console.log(Array.isArray("Nikhil"))// used to check is given is array or not
console.log(Array.from("Nikhil"))// It converts all other datatypes to array
console.log(Array.from({Name:"Nikhil"}))// Interesting
let score1= 100
let score2=200
let score3 = 300
console.log(Array.of(score1,score2,score3));// of returns set of array
