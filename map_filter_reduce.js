// higher-order functions in JavaScript commonly used for processing arrays

// The map() function applies a provided callback function to each element of an array and returns a new array with the results.

const celsiusTemperatures = [0, 10, 20, 30];
const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);

console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);


// The filter() function creates a new array with all elements that pass the test implemented by the provided callback function.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter(number => number % 2 === 0);

console.log("Even Numbers:", evenNumbers);



// The reduce() function applies a callback function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum);
