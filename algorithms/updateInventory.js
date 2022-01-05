// Compare and update the inventory stored in a 2D array 
// against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

const updateInventory = (arr1, arr2) => {
    arr1 = arr1.map(([count, name]) => [name, count]);
    arr2 = arr2.map(([count, name]) => [name, count]);

    let totalInventory = Object.fromEntries(arr1);

    arr2.forEach(([name, count]) => {
        if (name in totalInventory) {
            totalInventory[name] += count;
        } else {
            totalInventory[name] = count;
        }
    })

    totalInventory = Object.entries(totalInventory).sort((a, b) => {
        if (a[0] > b[0]) return 1;
        else return -1;
    }).map(([name, count]) => [count, name]);

    return totalInventory;
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));