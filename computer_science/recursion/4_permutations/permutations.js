// initial check if it is an array
const arrayCheck = (input) => Array.isArray(input);

const permutations = function(arr) {
    const combinations = [];

    // if it's not an array, terminate the function.
    if (!arrayCheck(arr)) {return;}

    //base case: if empty, return an array of an empty array
    if (arr.length <= 1) {
        combinations.push(arr);
    } else {
        // double nested for loop?
        for (i=0; i < arr.length; i++ ) {
            const current = arr[i];
            
        }
    }


    return combinations;
};
  
// Do not edit below this line
module.exports = permutations;
