const myarr = [1,2,3,5,6]
let initialValue  = 0;
let reduceValue  = myarr.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue)
console.log(reduceValue);

// shuruwaat me (accumulator) me  initial value deni padti hn phir jo bhi value aayegi output me vo accumulatir me add ho jaayegi

// Example

// shuruwaat me accumulatr me 0 jaayega phir 1 jaayega phir 3 aise hi aage 