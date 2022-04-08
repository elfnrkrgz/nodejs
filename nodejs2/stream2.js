const http = require('http');
const fs = require("fs");
const path = require("path")

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     const readStream = fs.createReadStream(path.join(__dirname, "data", "testdata.txt"), 'utf-8')
//     readStream.pipe(res)
// })
const server = http.createServer((req, res) => {

    console.log(req.url);

    if (req.url ==='/index' || req.url === '/'){
        
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    const readStream = fs.createReadStream(path.join(__dirname, "html", "index.html"), 'utf-8')
    readStream.pipe(res)


    }
    else if(req.url ==='/about'){

    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    const readStream = fs.createReadStream(path.join(__dirname, "html", "index.html"), 'utf-8')
    readStream.pipe(res)
    }

    // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // const readStream = fs.createReadStream(path.join(__dirname, "html", "index.html"), 'utf-8')
    // readStream.pipe(res)
})

server.listen(3000, () => console.log(`stream run port ${3000}`));