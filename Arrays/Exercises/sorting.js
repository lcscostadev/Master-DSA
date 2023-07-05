// BubbleSort

let arr = [3, 5, 4, 2, 1, 6, 9, 7, 8];

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let result = bubbleSort(arr);
console.log(result);

// Other sort algorithm's soon...