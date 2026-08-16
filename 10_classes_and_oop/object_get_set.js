const User={
    _email:'nikhil321@nm.com',
    _pass:"cba",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        return this._email=value;
    },
    get pass(){
        return this._pass.toUpperCase();
    },
    set email(value){
        return this._pass=value;
    }

}
const SoloSync = Object.create(User);
console.log(SoloSync.email);
