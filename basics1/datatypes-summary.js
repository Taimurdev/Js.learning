// primitive 

// 7 types; string, number, boolean, null, undefined, bigInt, symbol

// Reference (Non-primitive) datatypes

// array, functions, objects

// const heros = ["aimal", "asimmunir", "shahbaz"]

// let myObj = {
//     name: taimur,
//     age: 22,

// }

// const myFunction = function(){

    // console.log("hello world");
    
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// memories in javascript

//  stack (primitives), Heap(Non-primitives)

// let myNickname = "taimi"

// let anothername = myNickname
// anothername = "taimurshah"

// console.log(myNickname);
// console.log(anothername);

let user1 = {
    email: "taimur@123",
    upi: "tat@12"

}

let user2 = user1

user2.email = "hi@123"
 
console.log(user1.email);
console.log(user2.email);
