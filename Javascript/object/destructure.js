//understanding object destructure
let user ={
    course: "js in hindi", 
    instructure: "histesh",
    price:999

}

const {instructure} = user;
console.log(instructure);
//method to rename
const {instructure:teacher} = user
console.log(teacher);