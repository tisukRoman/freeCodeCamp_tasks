
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const randIndex = Math.floor(Math.random() * arr.length)
        const pivot = arr[randIndex];
        const less = []
        const greater = []

        for (let i = 0; i < arr.length; i++) {
            if (i === randIndex) continue;
            if (arr[i] > pivot) greater.push(arr[i]);
            if (arr[i] <= pivot) less.push(arr[i]);
        }

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));