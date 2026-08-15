function SetUserName(username){
    // complex db calls
    this.username=username
    console.log("called");
    
}

function createuser(username,email,password){
    //SetUserName(username)// it will not call the function
   // SetUserName.call(username)//it will only call not hold the variables
   SetUserName.call(this, username)
    this.email=email
    this.password=password
}
// Given will not call SetUsername from the function SetUserName
const solo = new createuser("Solo","solo@fb.com","123")
console.log(solo);
