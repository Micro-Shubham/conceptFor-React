let nums = [1,3,4,5,6,7,8,9];
// let newNums = nums.map((numb) =>numb + 10);
// console.log(newNums);
let number = nums
                 .map((num) => num*10)
                 .map((num) => num +1 ) 
                 .filter((num) =>num >20)
console.log(number);