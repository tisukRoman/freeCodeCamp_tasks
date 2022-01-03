// Symmetric Difference

const union = (arr1, arr2) => {
    const union = [];
    arr1.forEach(el => union.push(el));
    arr2.forEach(el => union.push(el));
    return [...new Set(union)];
}

const intersection = (arr1, arr2) => {
    let intersection = [];
    arr1.forEach(el => {
        if (arr2.includes(el)) {
            intersection.push(el)
        }
    });
    return [...new Set(intersection)];
}

const sym = (...args) => {
    let result = null;
    const iterationCount = args.length - 1;
    for (let i = 0; i < iterationCount; i++) {
        const currentUnion = union(args[0], args[1]);
        const currentIntersection = intersection(args[0], args[1]);
        const symDif = currentUnion.filter(el => !currentIntersection.includes(el));
        result = symDif;
        args.shift();
        args.shift();
        args.unshift(symDif);
    }
    return result;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) // 1 4 5