// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Challenge 1: getLength passes the length of the array into the callback.
function getLength (arr, cb) {
  cb(arr.length);
}
getLength(items, (length) => {
  console.log(length);
});


// Challenge 2: last passes the last item of the array into the callback.
function last(arr, cb) {
  cb(arr[arr.length - 1]);
}
last(items, (last) => {
  console.log(last);
});


// Challenge 3: sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  let add = x + y;
  cb(add); 
}
sumNums(5, 10, (addNums) => {
  console.log(addNums);
});


// Challenge 4: multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  let multiply = x * y;
  cb(multiply);
}
multiplyNums(5, 10, (numMultiply) => {
  console.log(numMultiply);
});


// Challenge 5: contains checks if an item is present inside of the given array/list
// Pass true to the callback if it is, otherwise pass false.
// The method I used below doesn't use callbacks. After I complete MVP I will go back and try to write another function. 
function contains (items, object, cb) {
  return items.indexOf(object) > -1;
}
console.log(contains(items, 'Pencil'));



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
