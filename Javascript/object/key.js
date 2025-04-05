let user = {
    username: "Shubham",
    lastname: "Yadav",
    id: 9,
    isloggedIn: true,
}
//print all the key only
console.log(Object.keys(user));
// output 
//[ 'username', 'lastname', 'id', 'isloggedIn' ]
console.log(Object.values(user))
//ask the key exist or not 
console.log(user.hasOwnProperty('lastname'));
console.log(user.hasOwnProperty('master'));