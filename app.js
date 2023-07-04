// 14.4: rest and spread

//
// refactor function to use rest and arrow function
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

const filterOutOdds2 = (...nums) => {
    return nums.filter((num) => {
        return num % 2 === 0
    });
}

// Write a function called findMin that accepts a...
// ...variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...nums) => Math.min(...nums);

// Write a function called mergeObjects that accepts two objects...
// ...and returns a new object which contains all the keys and values...
// ... of the first object and second object.

const mergeObjects = ((a, b) => {
    return combo = { ...a, ...b }
});


// Write a function called doubleAndReturnArgs
// which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values...
// ...and all of additional arguments doubled.

const doubleAndReturnArgs = ((array, ...args) =>
    numbers = ([...array, ...args].map(x => x * 2)));