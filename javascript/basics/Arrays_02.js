const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) 
// ["thor", "ironman", "spiderman", ["superman", "batman", "flash"]]
// console.log(marvel_heroes.length) // 4
// console.log(marvel_heroes[3][1]) // "batman"

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)
// ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes)
// ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array);
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray(marvel_heroes)) // true
console.log(Array.from("Vraj")); // ["V", "r", "a", "j"]
console.log(Array.from({name: "Vraj", age: 19})) // []
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]


