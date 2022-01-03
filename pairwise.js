// Given an array arr, find element pairs whose sum equal the second argument arg 
// and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. 
// Each pair should use the lowest possible available indices. 
// Once an element has been used it cannot be reused to pair with another element. 
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather 
// than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
// The pairs that sum to 20 are [7, 13] and [9, 11]. 
// We can then write out the array with their indices and values.


function pairwise(arr, arg) {
    const usedIndexes = [];
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                if (i === j || usedIndexes.includes(i) || usedIndexes.includes(j)) {
                    continue;
                } else {
                    result += i + j;
                    usedIndexes.push(i);
                    usedIndexes.push(j);
                }
            }
        }
    }

    return result
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));