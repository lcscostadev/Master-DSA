// concat, push, spread, arrayFrom

// Example 1

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

console.log(arr3);

// Example 2

let arrconc = [1, 2, 3];
let arrconc2 = [4, 5, 6];

let arrconc3 = arrconc.concat(arrconc2);

console.log(arrconc3)

// Example 3

let arrPush = [1, 2, 3];
let arrPush2 = [4, 5, 6];

arrPush.push(...arrPush2);

console.log(arrPush);

// Example 4

let arrFrom = [1, 2, 3];
let arrFrom2 = [4, 5, 6];

let arrFrom3 = Array.from(arrFrom).concat(arrFrom2);

console.log(arrFrom3);