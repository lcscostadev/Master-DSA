function findAverage(array) {
    // your code here
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return array.length !== 0 ? sum / array.length : 0;
}

// sum of all the elements divided by the size of the array.