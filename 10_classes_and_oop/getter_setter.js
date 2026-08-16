class User {
    constructor(email,password) {
        this.email=email;
        this.password=password;
    }
    //RangeError: Maximum call stack size exceeded this is an error if set along with 
    //-- constructor and setter as well 
    /*
     set password(value){
          this.password=value
    }*/
    
   //gettersetter for email
   get email(){
        return `${this._email}Nikhil`
    }
    set email(value){
          this._email=value
    }

   // gettersetter for password
    get password(){
        return `${this._password}Nikhil`
    }
    set password(value){
          this._password=value
    }
   
}
const nikhil=new User("nikhil@ai.com","cba")
console.log(nikhil.password);
console.log(nikhil.email);

// Older syntax in which we use get and set using properties
function User(email,pass){
    this._email=email;
    this._pass=pass;

    Object.defineProperty(this,'email',{
        get:function(){
           return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'pass',{
        get:function(){
           return this._pass.toUpperCase();
        },
        set:function(value){
            this._pass=value;
        }
    })
}
 const nikhil=new User("nikhil@ai.com","cba")
console.log(nikhil.pass);
console.log(nikhil.email);
