// pop, shift, slice, splice, filter

// example arrays
let arr = [1, 2, 3, 4, 5];
let arrFilter = [1, 2, 3, 4, 5];
let arrSlice = [1, 2, 3, 4, 5];
let arrSplice = [1, 2, 3, 4, 5];
// pop and shift

arr.pop();
arr.shift();

console.log(arr);

// filter
const filter = (arrFilter) => {
    let deletedElement = 3;

    let newArr = arrFilter.filter((el) => el !== deletedElement);
    return newArr;
}

let result = filter(arrFilter);
console.log(result);

// slice
const slice = (arrSlice) => {
    let index = 3;
    let newArrSlice = [...arrSlice.slice(0, index), ...arrSlice.slice(index + 1)];

    return newArrSlice;
}

let resultSlice = slice(arrSlice);
console.log(resultSlice)

// splice

const splice = (arrSplice) => {
    let index = 2;
    let removedItem = arrSplice.splice(index, 1);
    return removedItem;
}

let resultSplice = splice(arrSplice);
console.log(resultSplice)