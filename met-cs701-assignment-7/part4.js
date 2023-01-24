						
var events = require('events');
var net = require('net');
var channel = new events.EventEmitter(); channel.clients = {}; channel.subscriptions = {}; channel.on('join', function(id, client) {
						
channel.clients[id] = client;
channel.subscriptions[id] = function(senderId, message) {
						
if (id !== senderId) channel.clients[id].write(message);
						
}
						
channel.on('broadcast', channel.subscriptions[id]); }).on('leave', function(id, client) {
						
// cleanup on client disconnect
console.log('user ' + id + ' has left');
delete channel.clients[id]; channel.removeListener('broadcast', channel.subscriptions[id]); delete channel.subscriptions[id];
						
});
var server = net.createServer(function(client) {
						
var id = client.remoteAddress + ':' + client.remotePort; console.log('user ' + id + ' has joined'); channel.emit('join', id, client);
client.on('data', function(data) {
						
channel.emit('broadcast', id, data.toString()); }).on('close', function() {
						
channel.emit('leave', id, client); });
						
});
 server.listen(8888); 
					
				
			
		

