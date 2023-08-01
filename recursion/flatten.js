function flatten(args) {
  // add whatever parameters you deem necessary - good luck!

  let str = [...args.toString().split(",")];

  function helper(arr) {
    let collectArr = [];
    if (arr.length === 1) return Number(arr[0]);
    collectArr.push(Number(arr[0]));
    collectArr = collectArr.concat(helper(arr.slice(1)));
    return collectArr;
  }
  return helper(str);
}

console.log(
  //   flatten([1, 2, 3, [4, 5]]),
  flatten([1, [2, [3, 4], [[5]]]]),
  flatten([[1], [2], [3]]),
  flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
  flatten([[1], [2], [3]]), // [1,2,3]
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
); // [1, 2, 3, 4, 5]
