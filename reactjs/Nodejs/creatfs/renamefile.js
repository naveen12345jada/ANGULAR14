var http=require('http');
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end("naveen vandachikumar")
}).listen(8000);