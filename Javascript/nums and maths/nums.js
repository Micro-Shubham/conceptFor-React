// const score = 400;
// console.log(score);
// //bal should be number
// const balance = new Number(100);
// console.log(balance);
// //methods on number
// //1. changing num. to string 
// console.log(balance.toString());
// //2. toFixed()
// console.log(balance.toFixed(2));

// //3. toPrecision()
// let number = 123.6890
// console.log(number.toPrecision(3))
// console.log(number.toPrecision(4));
let num = 100000;
//place commas acc. to international system
console.log(num.toLocaleString())
//place comma acc. to indian system 
console.log(num.toLocaleString('en-IN'))