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
