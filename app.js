const http = require('http');
const fs = require('fs');
const express = require('express');
const url=require('url');
/* var path = require('path')
var app = express();

app.use(express.static(path.join(_dirname, 'public'))); */

http.createServer((req, res) => {
    
    var q=url.parse(req.url, true);
    console.log(q.pathname);
    if (req.url === '/') { 
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
            })
    }else if(req.url === '/register'){
        fs.readFile('views/test.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
            })
    }else if(q.pathname === '/signupaction'){
        console.log(q.query);
        fs.readFile('./views/testquiz.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
            })
    }else{
        res.writeHead(404,{ 'Content-Type': 'text/html' });
        res.write('Error')
        res.end();
    }

    
}).listen(7000, () => { console.log('Started') });

