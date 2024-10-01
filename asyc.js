console.log("aysc")
//asyncronous code  take time to excute it will not excuted js engine directly it will
//  excute by libuv libary used of aysc operation by node js  
let a = 1004515154
let b  = 555

const fs  = require("fs")
const https = require("https")

// sync method of reading file it block the main thread operation of v8 engine
fs.readFileSync("./file.txt","utf8",(err,da)=>{
    console.log(da)
})

console.log("syc")

https.get("https://jsonplaceholder.typicode.com/comments",(res)=>{
    console.log("res data")
})


fs.readFile("./file.txt","utf8",(err,da)=>{
    console.log(da)
})




setTimeout(() => {
    console.log("timmer")
}, 5000);


function mul(){
const result  = a + b;
return result
}

let c = mul()
console.log("mul"+c)
// console.log("mul")