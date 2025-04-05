let nums = [1, 3, 4, 5, 6, 7, 8, 9];
let initialvalue = 0;
let r = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialvalue
);
console.log(r);
let b = nums.reduce(function (acc, curr) {
  console.log(`acc:${acc} and current: ${curr}`);
  return acc + curr;
}, 0);
console.log(b);
