//Basic Example of a tcp server..Use telnet localhost 8000 to connect
var net=require('net');
var sockets=[];
var server=net.Server(function(socket){
sockets.push(socket);
socket.on('data',function(data){
for(var i=0;i<sockets.length;i++){
if(sockets[i]==socket) continue;
sockets[i].write(data);
}
});
socket.on('end',function(){
var i=sockets.indexOf(socket);
socket.splice(1,i);
});
});
server.listen(8000);
