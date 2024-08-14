// DAY-1

/*
Question:1
You are given an array of Integers in which each subsequent value is not less than the previous value. 
Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
*/
function squaredSortedArr (array) {
  const newArrary = Array(array.length).fill(0);
  for(let =0; i < arrary.length; i++)
    {
      newArrary[i] = Math.pow(array[i], 2)
    }

  newArrary.sort(function (a,b) {
    retun a-b
  })

  return newArrary;
}

// test cases
const a = [2,3,4]
const b = [-3, -2, 7]

console.log(squaredSortedArr(a))
console.log(squaredSortedArr(b))
