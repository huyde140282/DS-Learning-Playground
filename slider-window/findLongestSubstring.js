/*

Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


Time Complexity - O(n)
*/
// function findLongestSubstring(str) {
//   // add whatever parameters you deem necessary - good luck!
//   let start = 0;
//   let end = 0;
//   let maxLen = -Infinity;
//   let charMap = {};
//   while (end < str.length) {
//     const currentChar = str[end];
//     charMap[currentChar] = charMap[currentChar] || {
//       value: 0,
//       index: end,
//     };
//     charMap[currentChar].value++;
//     if (charMap[currentChar].value > 1) {
//       maxLen = Math.max(maxLen, end - start);
//       start = charMap[currentChar].index + 1;
//       end = start;
//       charMap = {};
//     } else {
//       end++;
//     }
//   }
//   return Math.max(Object.keys(charMap).length, maxLen);
// }
function findLongestSubstring(str) {
  let start = 0;
  let maxLen = 0;
  const charMap = {};

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];
    if (charMap.hasOwnProperty(currentChar) && charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }
    charMap[currentChar] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }
  console.log(maxLen)
  return maxLen;
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
