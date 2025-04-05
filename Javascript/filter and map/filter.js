let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let greatnum = arr.filter((num) => num > 5);
// console.log(greatnum);
// another method
let newNum = arr.filter((num) => {
    return num > 4;
})
console.log(newNum);
let loop = [];
arr.forEach((num) => {
  if(num>4) {
    loop.push(num);
  }
})

console.log(loop);
