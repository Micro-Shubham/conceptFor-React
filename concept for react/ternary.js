// its hard to write long if and else statment in ui
// To make is easy and handy ternary operator comes in place
let age = 20;
let adultOrNot = age > 18 ? "Adult " : "teenager";
console.log(adultOrNot);
// lets see how it will be handy in react componet 
const component = () => {
    return age > 18 ? <div>Adult</div> : <div>Teenager</div>
}