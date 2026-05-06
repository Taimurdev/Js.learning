const tinderUser = {}

    tinderUser.id = "123abc"
    tinderUser.name = "sammy"
    tinderUser.isLogedIn = "false"


// console.log(tinderUser);

const regularUser = {
    email: "taimi.com",
    fullname: {
        userfullname: {
            firstname: "taimur",
            lastname: "shah"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
   
     {
        id: 1,
        email: "bossss123"

    }, 
    {
        id: 1,
        email: "bossss123"

    }, 
    {
        id: 1,
        email: "bossss123"

    },
]

users[1]
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));







