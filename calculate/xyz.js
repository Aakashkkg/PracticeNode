console.log("xyz")
const fs = require("node:fs")
const https = require("https")

// aysc code ofload to libuv 
https.get("https://jsonplaceholder.typicode.com/albums", (res, data) => {
    console.log("data feche")
})

setTimeout(() => {
    console.log("dtaaahjjhadjhg")
}, 3000)

// console.log("this ishshkjasdjh")


// sync code
const x = "aan"
const sumdata = (a, b) => {
    return a + b;
}
fs.readFileSync(__dirname + "/data.json", "utf8", (err, mydata) => {
    console.log("file")
})


module.exports = { x, sumdata }

// export { sumdata, x }