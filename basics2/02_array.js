const marvel_heros = ["thor", "ironman", "jarvis", ]
const dc_heros = ["flash", "batman", "superman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5], 7, [8, 9, [0, 4]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("taimur"))
console.log(Array.from("taimur"))
console.log(Array.from({name: "taimur"}))  // case for interview ; you have to define the string otherwise it gives you empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));









