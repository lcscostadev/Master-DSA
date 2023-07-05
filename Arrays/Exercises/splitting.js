// slice

const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4);

console.log(slicedArr);  // Output: [2, 3, 4]

// splice

const splicedArr = arr.splice(2, 2);

console.log(splicedArr);  // Output: [3, 4]
console.log(arr);         // Output: [1, 2, 5]


// spread
const [first, second, ...rest] = arr;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]