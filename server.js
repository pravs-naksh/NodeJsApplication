var http = require("http");
var fs = require('fs');
http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(data);
	});
}).listen(2660,'127.0.0.1');

console.log("pravallika is on fiiiiirre");