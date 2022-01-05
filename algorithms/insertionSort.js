function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            array[j + 1] = key;
        }
    }
    return array;
}

console.log(insertionSort([5, 4, 33, 2, 8]));