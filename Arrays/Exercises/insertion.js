// push, unshift, splice

let arr = [];

arr.push(2);
arr.unshift(1);

arr.splice(2, 0, 3);

console.log(arr);

// Alternative way to analyse later

let arr2 = [1, 2, 4, 5];
let index = 2;
let elementToInsert = 3;

let newArr = [...arr.slice(0, index), elementToInsert, ...arr2.slice(index)];
console.log(newArr); // Output: [1, 2, 3, 4, 5]
