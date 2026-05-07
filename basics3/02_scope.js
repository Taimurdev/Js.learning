let a = 5;             // global scope

if(true){
    let a = 10;
    const b = 20;                               // block scope
    // console.log("INNER: ", a);
    
}
// console.log("a");


// for(let i = 0; i < Array.length; i++){       // just for loop, i is block scope
//     const element = Array[i];
//     console.log(element);
// }




function one (){
    const username = "taiumr";

    function two (){
        const website = "youtube.com";
        // console.log(username);

        
    }
    // console.log(website);
    
    // two();

}
// one();


if(true){

    const username = "taimur";
    if (username === "taimur"){
        const website = " youtube.com";
        // console.log(username + website);
    }
    // console.log(website);
                                       // console.log(username); and console.log(website); are not accessible outside the block scope
    }
// console.log(username);


// ++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++


addOne(2);   // function declaration, it can be called before the function is defined

function addOne (num){
    return num + 1;
}

// addOne(2)


addTwo(4);   // function expression, it cannot be called before the function is defined
const addTwo = function (num){
    return num + 2;
}
// addTwo(4);
