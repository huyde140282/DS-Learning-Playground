// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length == 1) return callback(arr[0]);
  if (callback(arr[0])) return true;
  let isCorrectValue = someRecursive(arr.slice(1), callback);
  return isCorrectValue;
}
console.log(
  someRecursive([1, 2, 3, 4], isOdd),
  someRecursive([4, 6, 8], (val) => val > 10), // false,
  someRecursive([4, 6, 8, 9], isOdd), // true,
  someRecursive([4, 6, 8], isOdd) // false
); // true
