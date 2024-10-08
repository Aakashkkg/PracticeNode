const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/getapi") {
        res.end("there is no data")
    }else{
        res.end("hello world")
    }

})

server.listen(7777)