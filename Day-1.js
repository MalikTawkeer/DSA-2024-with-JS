// DAY-1

/*
Question:1
You are given an array of Integers in which each subsequent value is not less than the previous value. 
Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
*/


// SOLUTION 1 with
      // Time complexity = O(n log n)
      // Space complexity = O(n)
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


/*****************************************************************************************************************************/

// SOLUTION 2 with 
        //Time complexity = O(n)
        //Space complexity = O(n)
const  squaredSortedArray = (array)  => {
  const newArray = new Array(array.length).fill(0);
  
  let leftPointer = 0
  let rightPointer = array.length-1
  
  for (let i = array.length - 1; i >= 0 ; i--) {
      const leftSquared = Math.pow(array[leftPointer], 2)
      const rightSquared = Math.pow(array[rightPointer], 2)
    if( leftSquared > rightSquared){
      newArray[i] = leftSquared
      leftPointer++;
    }else{
      newArray[i] = rightSquared
      rightPointer--;
    }
  }
  
  return newArray;
}

const a = [-3,2,4,5,6,10];

console.log(squaredSortedArray(a))


