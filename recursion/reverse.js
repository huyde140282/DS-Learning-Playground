function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let reverseStr = [];
  if (str.length === 0) return "";
  reverseStr.push(str[0]);
  reverseStr = reverse(str.slice(1)) + reverseStr;
  return reverseStr;
}
// Reverse Solution
// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

console.log(reverse("emosewa")); // 'emosewa'
