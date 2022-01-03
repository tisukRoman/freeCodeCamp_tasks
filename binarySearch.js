function binarySearch(searchList, value) {
    let arrayPath = [];

    while (searchList.length !== 1) {
        let middleIndex = (Math.floor(searchList.length / 2)) - 1;
        arrayPath.push(searchList[middleIndex]);

        if (searchList[middleIndex] === value) {
            return arrayPath
        }

        if (searchList[middleIndex] < value) {
            searchList = searchList.slice(middleIndex + 1, searchList.length);
        } else {
            searchList = searchList.slice(0, middleIndex + 1);
        }
    }

    return 'Value Not Found';
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];

console.log(binarySearch(testArray, 1));