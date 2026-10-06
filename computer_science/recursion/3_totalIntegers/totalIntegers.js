const totalIntegers = function (input) {
    // increment the 'integers' counter
    let integers = 0;

    if (typeof input !== "object") return undefined;

    // reference the values. If it's a simple array, return back as an array.
    // If it's a object, grab just the values (ignoring keys) of that object.
    const values = Array.isArray(input) ? input : Object.values(input);

    // loop through them and determine if it needs to be recursed.
    // base case: loop and count the numbers,
    // otherwise: 
    for (const value of values) {
        if (typeof value === "string") continue;
        if (Number.isInteger(value)) {
            integers++;
        } else if (typeof value === "object" && value !==null) {
            // the returned count of 'integers' needs to be added back at the surface level.
            integers += totalIntegers(value);
        }
    }
    return integers;
};
  
// Do not edit below this line
module.exports = totalIntegers;
