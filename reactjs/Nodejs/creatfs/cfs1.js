var http = require('http');
var fs = require('fs');


//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello  naveen kumar content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end("naveen vandachikumar")
}).listen(8000);
