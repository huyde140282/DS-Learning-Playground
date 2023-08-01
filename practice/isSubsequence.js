/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

*/

function isSubsequence(string1, string2) {
  // good luck. Add any arguments you deem necessary.
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  let i = 0,
    j = 0;
  while (i < string1.length && j < string2.length) {
    //check match word in order
    if (string1[i] === string2[j]) {
      i++;
    }
    //if the word not match increase j
    j++;
  }
  return i === string1.length;
}
console.log(
  isSubsequence("hello", "hello world")
  //   isSubsequence("sing", "sting"),
  //   isSubsequence("abc", "abracadabra"),
  //   isSubsequence("abc", "acb")
);
