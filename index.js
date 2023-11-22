// Write two function to find the factorial of a number using Iteration and recursion

getFactorialViaRecursion = (number) => {
    try {
        if (number === 0 || number === 1) return 1;
            
        return number * getFactorialViaRecursion(number - 1);
    }
    catch(err){
        console.log(err.message)
    }
};

// getFactorialViaRecursion(5);

getFactorialViaInteration = (number)=>{
    try {
        let factorial = 1;

        if (number === 0 || number === 1) return factorial;
        
        for(let i = number; i>=1; i--){ 
            factorial = factorial * i
        };

        return factorial
    }
    catch(err){
        console.log(err.message)
    }
};

// getFactorialViaInteration(5);


// 1. Reverse a string
const str =  'jarihda';

// a. use a for loop in reverse
const getReversedString = (str) =>{

    let reversedString = "";
    
    for(let i = str.length-1;i>=0;i--){
        reversedString += str[i];
    };

    return reversedString
};

// getReversedString(str);

// b. use built in methods
str.split("").reverse().join("");

// 2. Merge sorted array

const mergeSortedArray = (arr1, arr2) => {

  const mergedArray = [];

  let i = 0;

  let j = 0;

  while (i < arr1.length || j < arr2.length) {

    if (i < arr1.length && (j === arr2.length || arr1[i] < arr2[j])) mergedArray.push(arr1[i]), i++;
    
    else mergedArray.push(arr2[j]), j++;
    
  }

  console.log(mergedArray);
};

// mergeSortedArray([3, 4, 7, 8], [1, 2, 6, 9, 11, 13, 14]);

// 3. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
//    You may assume that each input would have exactly one solution, and you may not use the same element twice.

//    Example 1:

//    Input: nums = [2,7,11,15], target = 9
//    Output: [0,1]
//    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


const twoSum = (arr, target) => {

  const store = new Map();

  const output = [];

  for(let i = 0; i < arr.length;i++ ){

    const requiredValue = target - arr[i];

     if(store.has(requiredValue)) { output.push(arr[i], requiredValue); break; }

     else store.set(arr[i], i);
  }

  console.log(output)
 }

// twoSum([2,7,11,15], 9);

// 3.Given an integer array nums, find the subarray with the largest sum, and return its sum.
//   https://leetcode.com/problems/maximum-subarray/description/

//   Example 1:

//   Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//   Output: 6
//   Explanation: The subarray [4,-1,2,1] has the largest sum 6.


// 4.Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//   Note that you must do this in-place without making a copy of the array.

//   Example 1:

//   Input: nums = [0,1,0,3,12]
//   Output: [1,3,12,0,0]

const moveZeros = (nums) => {

  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 0) continue;

    [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
          // same as  
          // let temp = nums[nonZeroIndex];
          // nums[nonZeroIndex] = nums[i];
          // nums[i] = temp;
          nonZeroIndex++;
  }
}

// let nums = [1, 0, 2, 0, 3, 12];

// moveZeros(nums);
 
// 5. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//    Example 1:
//    Input: nums = [1,2,3,1]
//    Output: true

const checkDuplicates = (arr) =>{
  
  const store = new Map();

  for(let i = 0; i < arr.length; i++) {

    if(store.has(arr[i]))  return true;

    else store.set(arr[i], i)
  }

  return false;
};

// checkDuplicates([1,2,3,5,5,6,7,3]);

// 6.Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

//   Example 1:
//   Input: nums = [1,2,3,4,5,6,7], k = 3
//   Output: [5,6,7,1,2,3,4]
//   Explanation:
//   rotate 1 steps to the right: [7,1,2,3,4,5,6]
//   rotate 2 steps to the right: [6,7,1,2,3,4,5]
//   rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotateArray = (arr, steps) => {

  for(let i = 0; i < steps; i++) {

    arr.unshift(arr.pop());
  }

  console.log(arr);
};

// rotateArray([1,2,3,4,5,6,7], 3);

// 7. Write a function which accepts two arrays. The function should return true if every value in the array has it corresponding value squared in the second array. The frequency of the values must be same

// Example 1:
// [1,2,3] [4,1,9] true
// [1,2,3] [1,9] false
// [1,2,1] [4,4,1] false, frequency must be same

// a. solution 1
const checkSquared = (arr1, arr2) => { 

  if(arr1.length != arr2.length) return false;

  for(let i = 0; i < arr1.length; i++) {

    const index = arr2.indexOf(arr1[i] ** 2); // indexOf operation is O(n) inside of a loop

    if(index == -1) return false;

    arr2.splice(index, 1)
  }

  return true;

};

// checkSquared([1,2,3], [4,1,9]);

// b. Frequency counter patter

const checkSquaredWFrequency = (arr1, arr2) => {

  if (arr1.length !== arr2.length) return false;

  const squaredFrequencyStore = new Map();

  const nonSquaredFrequencyStore = new Map();

  for (let i = 0; i < arr1.length; i++) {

    const squaredKey = arr1[i] ** 2;

    squaredFrequencyStore.set(squaredKey, (squaredFrequencyStore.get(squaredKey) || 0) + 1);

    const nonSquaredKey = arr2[i];

    nonSquaredFrequencyStore.set(nonSquaredKey, (nonSquaredFrequencyStore.get(nonSquaredKey) || 0) + 1);
  }

  for (let [key, value] of squaredFrequencyStore) {
    
    if (value !== nonSquaredFrequencyStore.get(key)) return false;
  }

  return true;
};

// checkSquaredWFrequency([1, 2, 3, 2], [4, 1, 9, 4]);


// 8. Frequency Counter - validAnagram - Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('qwerty', 'qeywrt') // true

function validAnagram(str1, str2){

    const textValue = str1.replace(/\s/g, "").toLowerCase();

    const anagramValue = str2.replace(/\s/g, "").toLowerCase();

    const textStore = new Map();
    
    const anagramStore = new Map();
    
    for(let i = 0; i<textValue.length; i++){
        
        textStore.set(textValue[i], (textStore.get(textValue[i]) || 0) + 1);
        
        anagramStore.set(anagramValue[i], (anagramStore.get(anagramValue[i]) || 0) + 1);
    };
    
    for(let [key, _value] of textStore){
        
        if(textStore.get(key) != anagramStore.get(key)) return false
    };
    
    return true;
}

// validAnagram("Tom Marvolo Riddle", "Lord Voldemort")


// 9. Multiple Pointers - countUniqueValues - Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. Solution should be implemented without creating a store.

//    countUniqueValues([1,1,1,1,1,2]) // 2
//    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
//    countUniqueValues([]) // 0
//    countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr){

    if(arr.length === 0) return 0;

    var i = 0;

    for(var j = 1; j < arr.length; j++){

        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
// countUniqueValues([1,2,2,5,7,7,99])


const maxSubArraySum = (arr, window) =>{

    let maxSum = 0;

    let tempSum = 0;

    for(let i = 0; i < window; i++) {

        maxSum += arr[i];
    };

    tempSum = maxSum;

    for(let i = window; i < arr.length; i++){

        tempSum = tempSum - arr[i - window] + arr[i];

        maxSum = Math.max(maxSum, tempSum)
    }

    console.log(maxSum);
};

// maxSubArraySum([1,2,4,5,6,3,2,5,6,5],4)


// 10. Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If value is not found return -1.

//     Example -
//     [1,2,3,5,6,7,9,10,33,55,67], 55 - returns 9
const searchIndex = (arr, num) => {

    let min = 0;
    
    let max = arr.length-1;

    while(min <= max){

        const mid = Math.floor((min + max) / 2);

        if(arr[mid] < num) min = mid + 1;

        else if(arr[mid] > num) max = mid - 1;

        else {
            console.log(mid); return mid; 
        }
    }

    console.log(-1)
};

searchIndex([1,2,3,5,6,7,9,10,33,55,67], 55);