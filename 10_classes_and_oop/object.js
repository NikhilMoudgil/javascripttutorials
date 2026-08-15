function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));// we are printing function
console.log(multiplyBy5.power);// we are accessing arrays as objects with .
console.log(multiplyBy5.prototype);// we are accessing prototype

// IN js everything is an object thus prototypal inheritance and object is the parent

function creatUser(Username, score) {
    this.Username = Username;
    this.score = score;
}
creatUser.prototype.increament = function () {
    this.score++;// this is used to get context so that we can execute differnt parameters
}

creatUser.prototype.printme = function () {
    console.log(`score is= ${this.score} `);

}
const solo = new creatUser("solo", 25)
const sync = creatUser("sync", 24)

solo.printme();
sync.printme();

//  properties are in function via prototype  and need to tell the prototype that
//- new functions are injected so to do so we use "new"
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
