const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

//const mynewObject=Object.create() //factory method

const cofee = {
    name: "Nescafe",
    price: 250,
    isAvailable: true,

    orderCoffee: function () {
        console.log("Need to avoid coffee");

    }
}
console.log(Object.getOwnPropertyDescriptor(cofee, "name"));// this will give you thr property description 
// for a key  of an object
Object.defineProperty(cofee,'name',{enumerable:false})//-> defineproperty can
//-- define the property of key of object and cannot be writable
console.log(Object.getOwnPropertyDescriptor(cofee, "name"));

//for (let[key,value]of cofee) {
//  console.log(`${key}:${value}`);   
//}// objects are not iterative in this situation and we use entries to iterate

for (let [key, value] of Object.entries(cofee)) {

    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }

}