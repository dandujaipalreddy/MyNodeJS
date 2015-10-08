var http=require("http");
var s=http.createServer(function(req,res){
res.end("My first server");
});

s.listen(8080,'127.0.0.1');
