// Linear Search

const arrLinear = [1, 2, 3, 4, 5];

const linearSearch = (arr) => {
    let target = 4;

    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return target;
        }
    }
}

console.log(linearSearch(arrLinear));

// Binary Search

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}