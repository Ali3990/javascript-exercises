const arrayCheck = (input) => Array.isArray(input);

const permutations = function(arr) {
    const combinations = [];

    // if it's not an array, terminate the function.
    if (!arrayCheck(arr)) {return;}

    //base case: if empty, return an array of an empty array
    if (arr.length === 0) {
        combinations.push(arr);
        
    } 


    return combinations;
};
  
// Do not edit below this line
module.exports = permutations;
