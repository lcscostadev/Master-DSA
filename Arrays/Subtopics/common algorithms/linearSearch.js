const arr = [1, 2, 3, 4, 5];

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


const target = 4;
const result = linearSearch(arr, target);
console.log(result);
