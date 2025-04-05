const event = new Promise((resolve, reject) => {
    var name = "Jack"
    if(name == "Pedro")  {
        resolve(name)
    } else {
        reject("Name was not Pedro, name was:"+name)
    }
})
// then is for resolve and catch is for reject
event.then((name) =>{
console.log(name) 
}).catch((err) => {
    console.log(err)
})