// console.log("Syc")
// syncronous code doest not take time to excute it will excuted line by line becoause of single thread
let a = 1004515154
let b  = 555
console.log("hello")
// when the all the syc code excuted and call stack and main thread of js engine is empty then all the aysc code executed print val

setTimeout(() => {
    console.log("imideatily")
}, 0);


function mul(){
const result  = a + b;
return result
}

let c = mul()

console.log("mul : " +c)