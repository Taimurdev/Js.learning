// immediately invoked function expression (IIFE) is a function that is executed immediately after it is defined. It is a design pattern that is used to create a new scope for variables and functions, which helps to avoid polluting the global scope.
// we use iife when we want to execute a function immediately and we don't want to pollute the global scope with variables and functions that are only used inside the function

(function chai () {
    console.log("DB CONNECTED");  // named iife
})();  // this will immediately invoke the function and print "DB CONNECTED" to the console
          
// chai()

( () => {
    console.log("DB CONNECTED");   // anonymous iife or simple iife
}
)();


( (name) => {
    console.log(`DB CONNECTED ${name}`);   // we can also pass arguments to the iife, in this case we are passing name as an argument and it will be printed in the console
}
)('taimur')

// we can also use arrow function to create an iife, but we need to wrap the function in parentheses, otherwise it will give us an error because the JavaScript engine will think that we are trying to declare a function and not invoking it immediately


    