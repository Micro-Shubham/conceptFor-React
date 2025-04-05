const fetch = require("node-fetch");

//creating promise
let promiseOne = new Promise(function (resolve, reject) {
  //do any anych task
  //cryptocraphy , newtwork call
  setTimeout(() => {
    console.log("async task completed");
    resolve();
  }, 1000);
});
//.then take resolve
promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise 2 consumed");
});

let promiseThree = new Promise(function(resolve, reject ) {
    setTimeout(() => {
       resolve({username:"Shubham Yadav", email:"shubham@example.com"}) 
    }, 1000);
})
 promiseThree.then(function(user) {
    console.log(user);
 })
 let promiseFourth = new Promise(function(resolve, reject) {
    setTimeout(() => {
       let error = true;
       if(!error)  {
        resolve({username:"Shubham Yadav", email:"shubham@example.com"})
       }  else {
        reject('ERROR: something went wrong')
       }
    }, 1000);
 })
 promiseFourth
 .then(function(user){
    console.log(user);
    return user.username
 }).then((username) => {
    console.log(username);
 }).catch(function(error) {
    console.log(error);
 }).finally(() => {
    console.log("The promise is either resolved or rejected");
 })
 // learn some new way to rather than .then and .catch
 let promiseFifth = new Promise(function (resolve,reject) {
    setTimeout(() => {
       let error = true;
       if(!error) {
        resolve({username:"Javascript", password:"123"})
       } else {
        reject('ERROR:JS went wrong')
       }
    }, 1000);
 })
 
 async function consumePromiseFive() {
    try {
        let response = await promiseFifth
       console.log(response) 
    } catch (error) {
       console.log("error")
    }
 }
 consumePromiseFive();

//  async function getAllUsers() {
//     try {
//        let response = await fetch('https://jsonplaceholder.typicode.com/users') 
//        let data = await response.json()
//        console.log(data)
//     } catch (error) {
//        console.log("error",error) ;
//     }
//  }

//  getAllUsers();
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data)
})
.catch(function(error) {
    console.log("error occure")
})