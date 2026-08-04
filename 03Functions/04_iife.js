//----- Immediatly Invoked Function Expression
// Iife is used to global scope polution for a given functions
//  and want to immediatly invoke a function.
/*function code(){
    console.log(`Db coonected`);
   
}
code()// this is basic fuction invoking and can get global polution 

/*function code(){
    console.log(`Db coonected`);
    
}()// It will give error as we cannot used these directly  this can 
// be solved as given syntax*/
 (function code(){
    // named IIFE
    console.log(`Db coonected`);
})();// semicolon is end of the iif if we want to write  two IIFE
//-----note-> In js The immediatly invoked expresion dones'nt  know wher to end context 
// and in  js we need to end that line so we used ';' 
// In above example we applied parenthesis over a  function definition
// first () will  be used as function definition and second () used for execution
// ---- as arrow function---//
// unnamed IIFE or Arrow function IIFE
(()=>{
    console.log(`Db connected two `);
})()
// Parameter Passing to  Arrow Function
((name)=>{
    console.log(`Db connected two ${name}`);
})('Nikhil')