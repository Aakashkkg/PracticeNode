const obj1 = require("./xyz.js")
const obj2 = require("./multiply.js")

module.exports = { ...obj1, ...obj2 }