// http = http handle the request and response of server in node js


const http = require("http")

http.createServer((req, resp) => {
    console.log("god");
    resp.write("hello how are you ")
    resp.end()
}).listen(60000)


