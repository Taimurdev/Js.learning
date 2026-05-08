const user = {
    username: "taimur",
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomeMessage();  // this will give error because this is not defined in global scope, it is defined in user object, so we need to call it with user object