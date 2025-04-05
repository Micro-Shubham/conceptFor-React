//understand literal , singleton and non singleton
let obj1 = {1:"a", 2:"b", 3:"c"}
let obj2 = {4:"d", 5:"e", 6: "f"}
 let obj3 = Object.assign(obj1, obj2);
console.log(obj3);
//better approach
obj3 = Object.assign({}, obj1, obj2);
// empty object will target and other object will get init
//another method to add two different object using spread method
let obj4 = {...obj1, ...obj2};
console.log(obj4);