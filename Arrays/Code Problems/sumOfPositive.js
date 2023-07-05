/**
 * You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 * 
 */

const sumOfPositives = (arr) => {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

// if the number is bigger than 0 (positive), we sum the "sum" with "num" otherwise we just return the current sum and don't add anything.
