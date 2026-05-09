const user = {
    username: "taimur",
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage();  // this will give error because this is not defined in global scope, it is defined in user object, so we need to call it with user object
// user.username = "sam" 
// user.welcomeMessage();  

// console.log(this);  // this will give us the global object, which is window in browser and global in node.js

// Arrow function does not have its own this, it takes this from the surrounding scope, which is global scope in this case

// function chai(){

//     username = "taimur"
//     console.log(this);     // this will give us the global object, which is window in browser and global in node.js so we cant use this lie this

// }

// chai();


// const chai = function(){
//     username = "taimur"
//     console.log(this.username);   
    
    
const chai = () => {
    username = "taimur"
    console.log(this.username);     
    }

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2;   // implicit return we can omit the return keyword and the curly braces if the function body is a single expression


// const addTwo = (num1, num2) => (num1 + num2);  // if wrap the expression in parentheses, it will be treated as an expression and the result will be returned and cannot use return

const addTwo = (num1, num2) => ({"username": "taimur"}); // if we want to return an object, we need to wrap it in parentheses, otherwise it will be treated as a block of code and we will get an error


console.log(addTwo(5, 10));