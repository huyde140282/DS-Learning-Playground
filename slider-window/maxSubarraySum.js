/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/
function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length || num > arr.length) return null;

  let sum = 0;
  let temp = 0;
  // get first sum
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  temp = sum;
  // minus last element and plus new element
  for (let i = num; i < arr.length; i++) {
    temp += arr[i] - arr[i - num];
    sum = Math.max(temp, sum);
  }
  console.log(sum);
  return sum;
}
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
