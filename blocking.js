console.log("block")
let a = 1004515154
let b = 555
const crypto = require("crypto")
//also use as const crypto = require("node:crypto")
// sync method of reading file it block the main thread operation of v8 engine
// when the call stack is empty then all the aysc code executed

// crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512")
console.log("syc key")



// password base key derevation f()
// its a asyc function
crypto.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key) => {
    console.log("asyc key")
})

function mul() {
    const result = a + b;
    return result
}

let c = mul()
console.log("mul : " + c)
// console.log("mul")