"use strict";
const getDiff = (initialValue, valueToCompare) => {
    const initialArray = initialValue.split("");
    const arrayToCompare = valueToCompare.split("");
    const difference = initialArray
        .filter(s => !arrayToCompare.includes(s))
        .concat(arrayToCompare.filter(s => !initialArray.includes(s)));
    return {
        amount: difference.length,
        array: difference
    };
};
console.log(getDiff('abc', 'abcd')); // { amount: 1, array: ['d'] }
console.log(getDiff('abcd', 'cdfe')); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff('abc', 'wbbcc')); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff('abc', 'abc')); // { amount: 0, array: [] }
