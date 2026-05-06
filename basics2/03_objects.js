// singleton
// but this is object literal

// const mySym = Symbol("key1")

const JsUser = {
    name: "taimur",
    // "full name": "Taimur shah"
//    [ mySym]: "mykey1"
    age: 28,
    email: "taimur@13.com",
    location: "pakistan",
    isLogedIn: false,
    loggedInDays: ["monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// JsUser.email = "taimur.com"
// Object.freeze(JsUser)
// JsUser.email = "taimur.npcom"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
    
}
JsUser.greeting2 = function() {
    console.log(`hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());







