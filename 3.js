// Hanif Sungkar

function sumArray(arr, target) {
    let seen = new Set();
    return arr.reduce((result, num) => {
        let complement = target - num;
        if (seen.has(complement)) {
            result.push([complement, num]);
        }
        seen.add(num);
        return result;
    }, []);
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));