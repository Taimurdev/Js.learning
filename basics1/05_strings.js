const name = "taimur"
const repoCount = 03

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String('Taimur-hs-com-hi')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.indexOf('t'));
console.log(gameName.charAt('2'));

const newString = gameName.substring(2, 5)
console.log(newString);

const anotherString = gameName.slice(-5, 4)

console.log(anotherString);

const newString1 = "     taim     "
console.log(newString1);
console.log(newString1.trim());

const url = "https//timur.com/taimur20%shah"
console.log(url.replace('20%', '-'));

console.log(url.includes('taimur'));
console.log(url.includes('taiiii'));


console.log(gameName.split('-'));



