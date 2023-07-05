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

// For this section, write the following functions using rest,
// spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and
// not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = ((...items) => {
    while (items.length) {
        const randomItem = Math.floor(Math.random() * items.length);
        console.log(items[randomItem]);
        items.splice(randomItem, 1);
        return items;
    }
});

/** Return a new array with every item in array1 and array2. */

const extend = ((array1, array2) => both = [...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */
// addKeyVal({
//     type: 'oolong',
//     name: 'winter sprout',
//     origin: 'taiwan'
// }, 'price', 22.99)

const addKeyVal = ((obj, k, v) => {
    const oldStuff = { ...obj };
    const newStuff = { [k]: v };
    return allStuff = { ...oldStuff, ...newStuff };
});


/** Return a new object with a key removed. */

const removeKey = ((obj, k) => {
    const newObj = { ...obj };
    delete newObj[k]
    return newObj;
});


/** Combine two objects and return a new object. */

const combine = ((obj1, obj2) => {
    return both = { ...obj1, ...obj2 }
});


/** Return a new object with a modified key and value. */

const update = ((obj, key, val) => {
    const Things = { ...obj };
    return newThing = { ...Things, [key]: val };
});