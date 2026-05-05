
// Array

const myArr = [1, 2, 3, 4, 5]

const myHeros = ["shambho", "ganesh", "vishnu", "shiva"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]);

// console.log(myHeros[2]);


// Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(0)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(8));

const myArr3 = myArr.join()
                           // converting into string
// console.log(myArr3);

// slice and splice




console.log("A", myArr);

const myn1 = myArr.slice(0, 3) // it will not change the original array

console.log(myn1);
console.log("B", myArr);
// manipulation in the original array
const myn2 = myArr.splice(0, 3)
console.log("C", myArr);
console.log(myn2);


