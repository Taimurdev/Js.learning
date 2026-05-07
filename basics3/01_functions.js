function sayMyName(){
    console.log("T");
    console.log("a");
    console.log("i");
    console.log("m");
    console.log("u");
    console.log("r");
}
sayMyName()


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
console.log(userLoggedIn()); //if we do not pass any value for username, it will be set to "sam" and the function will return "just logged in as sam" but if we pass an empty string as a value for username, it will return "please enter a username" because an empty string is falsy in JavaScript. and if we pass a value for username, it will return "just logged in as username" where username is the value passed by the user.




