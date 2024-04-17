var http = require('http');
var dt = require('./module1');   //file  including within the same module and using export key word from another file  

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);