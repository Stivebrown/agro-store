const { createServer} = require('node:http');
const hostname = "127.0.0.1";
const port = 3002;

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content Type", "text/plain");
    res.end("Hello World!");
});

server.listen(port,hostname, () => {
    console.log(`Server runiing at http://${hostname}:${port}/`);
});