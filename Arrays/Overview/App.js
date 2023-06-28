const arr = [1, 2, 3, 4, 5];

const array = [];

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

const myArray = new Array(1, 2, 3, 4, 5);

const mapArray = arr.map((num) => num * 2);
console.log(mapArray);

const filterArray = arr.filter((num) => num % 2 === 0);
console.log(filterArray);

const sum = arr.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);