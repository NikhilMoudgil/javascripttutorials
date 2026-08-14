/*Promises-> 
The promise object represents the eventual completion or failure on an async
ops and its resulting value

*It has three States->
. pending->initial state, neither fullfilled nor rejected 
. fulfilled-> ops completed succesfully 
.rejected -> ops failed 

*/
const promiseOne = new Promise(function (resolve, reject) {
    // Do an ASYNC task
    //DB calls , cryptography, network
    setTimeout(function () {
        console.log('Async Task Completed');
        resolve();
    }, 1000)
});

promiseOne.then(function () {
    console.log("Promise Consumed");
});// then is related to resolve

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");

})
// third method
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Nikhil.M", email: "nikhilmoudgil799@gmail.com" });
    }, 1000);

})
promiseThree.then(function (user) {
    console.log(user);

})

// Fourth method/promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;// this is for error
        //let error= false;
        if (!error) {
            resolve({ username: "Nikhil.M", email: "nikhilmoudgil799@gmail.com", password: "123" });
        } else {
            reject(`Error Something Went Wrong`)
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log((username));

})
.catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("Finally the promise is either resolved or rejected"));


//Promise 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        } else {
            reject(`Error: JS Went Wrong`)
        }
    }, 1000)
})
// async await is used instead of .then/.catch
async function consumePromiseFive() {
    //const response=await promiseFive;
    // console.log(response);
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// promiseSix
async function getAllUsers() {
    try {
        const responses = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responses.json()
        console.log(data);

    } catch (error) {
        console.log("E:", error);
    }
}getAllUsers();


// similar function as .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
// thenable/Chainable then
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))

// fetch- > it starts the process of fetching a resource from the network,
//returning a promise which is fulfilled  once the response is available