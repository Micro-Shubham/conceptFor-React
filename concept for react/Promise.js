const event = new Promise((resolve, reject) => {
    var name = "Jack"
    if(name == "Pedro")  {
        resolve(name)
    } else {
        reject("Name was not Pedro, name was:"+name)
    }
})
// every promise in js contain then and catch
// then is for resolve and catch is for reject
// lets grab our promise which event 
event.then((name) =>{
console.log(name) 
}).catch((err) => {
    console.log(err)
})