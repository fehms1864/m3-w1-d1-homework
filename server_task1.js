var http = require('http');

var hostname = 'localhost';

//change port number if already in use
var port = 5000;

var server = http.createServer( (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    var fileUrl = req.url;

    if (fileUrl === '/') {
        res.statusCode = 200;
        res.end("<html><body><h1>Home Page.</h1></body></html>");
    } else if (fileUrl === '/about') {
        res.statusCode = 200;
        res.end("<html><body><h1>About Page.</h1></body></html>");
    } else if (fileUrl === '/contact') {
        res.statusCode = 200;
        res.end("<html><body><h1>Contact Page.</h1></body></html>");
    } else {
        res.statusCode = 404;
        res.end("<html><body><p>Invalid Request!</p></body></html>");
    }
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running....`);
})