const http = require('node:http'); // 
const fs = require('node:fs');

//
const layout = require('./src/layout')


const hostname = '127.0.0.1';
const port = 3000;




const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(layout);

})




server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
