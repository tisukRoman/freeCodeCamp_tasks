function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    else {
        const half1 = arr.slice(0, ~~(arr.length / 2));
        const half2 = arr.slice(~~(arr.length / 2));
        return merge(mergeSort(half1), mergeSort(half2));
    }
}

function merge(arr1, arr2, res = []) {
    if (!arr1.length && !arr2.length) return res;
    if (!arr2.length) return res.concat(arr1);
    if (!arr1.length) return res.concat(arr2);
    else {
        if (arr1[0] < arr2[0]) {
            res.push(arr1[0]);
            arr1.shift();
            return merge(arr1, arr2, res);
        } else {
            res.push(arr2[0]);
            arr2.shift();
            return merge(arr1, arr2, res);
        }
    }
}

console.log(mergeSort([1, 4, 2, 6, 54, 4, 323, 21, 1]));