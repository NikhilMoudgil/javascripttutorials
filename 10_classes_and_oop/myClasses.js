// It is afterb ES6 -->  ***classes
//constructor are used in classes
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`//encrypted password
    }

    usernameCapital() {
        return `${this.username.toUpperCase()}`
    }
}
const sync = new user("solo", "solo@gmail.com", "123")
console.log(sync.encryptPassword());
console.log(sync.usernameCapital());

//behind the scene
function User(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword=function(){
     return `${this.password}abc`//encrypted password
}

User.prototype.usernameCapital=function(){
      return `${this.username.toUpperCase()}`
}
const sync = new User("solo", "solo@gmail.com", "123")
console.log(sync.encryptPassword());
console.log(sync.usernameCapital());