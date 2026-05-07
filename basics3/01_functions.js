function sayMyName(){
    console.log("T");
    console.log("a");
    console.log("i");
    console.log("m");
    console.log("u");
    console.log("r");
}
// sayMyName()


function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(4, 7);

// console.log("Result: ", result);

function userLoggedIn(username = "sam"){   //if we want to set a default value for username, we can do it like this. if the user does not pass any value for username, it will be set to "sam"
    if(!username){    //or add ! instead of === undefined
        console.log("please enter a username")
        return;
}
     
    return `just logged in as ${username}`;
}


// console.log(userLoggedIn("Taimur"));
// console.log(userLoggedIn()); //if we do not pass any value for username, it will be set to "sam" and the function will return "just logged in as sam" but if we pass an empty string as a value for username, it will return "please enter a username" because an empty string is falsy in JavaScript. and if we pass a value for username, it will return "just logged in as username" where username is the value passed by the user.



function calculateCartPrice (...num1){ //... is a rest operator that allows us to pass an arbitrary number of arguments to the function and it will be stored in an array called num1. so we can use num1 as an array to access the values passed by the user.
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400));


const user = {
    name: "Taimur",
    age: 25,
}

function handleObject (anyObject){
    console.log(`user name is ${anyObject.name} and user age is ${anyObject.age}`);
}
// handleObject(user);

handleObject({
    name: "Sam",
    age: 30,
})

const myNewArray = [1, 2, 3, 4, 5];

function returnsecondValue (getArray){
    return getArray[3];
}

// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([10, 20, 40, 42]));

