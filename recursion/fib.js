// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
let sum = 0;
// function fib(num) {
//   // add whatever parameters you deem necessary - good luck!
//   let start = 0;
//   let sum = start;
//   function helper(start) {

//     sum += helper(start + 1) + helper(start);
//     return start;
//   }
//   helper(start);
//   return sum;
// }
function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num === 2 || num === 1) return 1;

  return fib(num - 1) + fib(num - 2);
}
console.log(fib(4),fib(10),fib(28),fib(35)); // 55

// 1, 1, 2, 3, 5, 8, 13;
// i=1 -> 1
// i=2 ->1
// i=3-> f(2)+ f(1)
// i=4 -> f(3) + f(2)
// f(3) + f(2) + f(1);
