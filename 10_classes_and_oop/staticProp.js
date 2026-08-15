class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username:${this.username}`);  
    }
    static createId(){// it prohibits access for method to every object instanciated by this class
        return`123`;
    }
}
//const nikhil = new User("Nikhil")
//console.log(nikhil.createId()); this will be error as static is there
 class Admin extends User {
    constructor(username,email) {
         super(username)// access of parent class or root class
        this.email=email
    }
 }
 const iphone= new Admin("Iphone","apple@mac.com")
 iphone.logme();
 console.log(iphone.createId());// cannot acces createid as it is "static"
 