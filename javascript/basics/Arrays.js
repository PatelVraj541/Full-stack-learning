// arrays declaration

const myArray = [1, 2, 3, 4, 5];

const myArr2 = new Array(6, 7, 8, 9, 10);

console.log(myArray);
console.log(myArr2);

// array methods

myArray.push(6);
myArray.push(7);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(0); 
// adds an element to the beginning of the array 
// by shifting all existing elements to the right and 
// inserting the new element at index 0.
console.log(myArray);

console.log(myArray.includes(3)); // true
console.log(myArray.includes(10)); // false
console.log(myArray.indexOf(3)); // 2
console.log(myArray.indexOf(10)); // -1

const newArr = myArray.join()
console.log(newArr); // "0,1,2,3,4,5"
console.log(typeof newArr); // "string"

// sclice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1, 4); // creates a new array with elements from index 1 to 3 (4 is not included)
console.log(myn1);

console.log("B ", myArray);
const myn2 = myArray.splice(2, 2); 
// removes 2 elements starting from index 2 (3 and 4) and 
// returns them as a new array
console.log(myn2);
console.log(myArray); // myArray is modified, it now contains [0, 1, 5]