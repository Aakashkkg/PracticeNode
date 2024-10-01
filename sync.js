console.log("Syc")
// syncronous code doest not take time to excute it will excuted line by line becoause of single thread
let a = 1004515154
let b  = 555

function mul(){
const result  = a + b;
return result
}

let c = mul()
console.log(c)
console.log("mul")