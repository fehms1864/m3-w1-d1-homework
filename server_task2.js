var http = require('http');
var path = require('path');
var fs = require('fs');

var hostname = 'localhost';

//change port number if already in use
var port = 5000;

var server = http.createServer((req, res) => {
    var fileUrl = req.url;
    if (fileUrl === '/') {
        fileUrl = '/index.html';
    } else if (fileUrl === '/about') {
        fileUrl = '/about.html';
    } else if (fileUrl === '/contact') {
        fileUrl = '/contact.html';
    }
    var filePath = path.resolve('./public' + fileUrl);

    fs.access(filePath, function (err) {
        //if not a valid file path
        if (err) {
            console.log(`${err}`);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end("<html><body><p>Invalid Request!</p></body></html>");
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running....`);
})