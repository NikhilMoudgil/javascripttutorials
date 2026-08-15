class User{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`UserName is ${this.username}`);
    }
}
class admin extends User{
    constructor(username,email,password){
          super(username)
            this.email=password
            this.password=password
    }
   adduser(){
    console.log(`A new user was added by${this.username}`);
   }

}
const solo= new admin("SoloSync","solo@gmail123","password")
solo.logme();
solo.adduser();

const sync = new User("SoloSync")
sync.logme()
solo.logme()

console.log(solo instanceof admin);//instance of check if variable is instance of function
console.log(solo instanceof User);
