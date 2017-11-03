

//ex1
//var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//ex2
//Both functions take two parameters, an array and an element to add to the beginning of the array,
//and both functions should add the element to the beginning of the array and then return the whole array.
// The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original
//array that's passed in; addElementToBeginningOfArray, on the other hand, should return a new array
//and not modify the original.



function addElementToBeginningOfArray(arrayOfThings, value) {
      arrayOfThings.unshift(value);
       return arrayOfThings;
}

function destructivelyAddElementToBeginningOfArray(){}

//These functions also take two arguments, an array and an element to add to the
// end of the array. addElementToEndOfArray should not alter the original array;
// destructivelyAddElementToEndOfArray should alter the original array.
function addElementToEndOfArray(){}

function destructivelyAddElementToEndOfArray(){}
//The function should accept an array and an index and return the element at that index.
function accessElementInArray(){}
