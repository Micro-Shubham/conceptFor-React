// there is many way to declare annymous function 
//  1.
const sol = function () {
    console.log("hello there")

}
// calling annymous function 
sol()
// 2.
// declaring using arrow function 
const secondSol =( () => {
 console.log("hello there from second method")
})();
secondSol()