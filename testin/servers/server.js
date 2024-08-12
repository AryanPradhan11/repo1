const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome home to the first webpage')
        console.log("The page is working");
        
    }
    else if(req.url === '/about') {
        res.end("This is the about us page")
        console.log("So is this");
        
    } 
    else {
        res.end(`<h1> OOPS!!!!!!!! </h1>`)
    }
})

server.listen(4000)