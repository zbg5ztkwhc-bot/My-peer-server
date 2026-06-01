const { PeerServer } = require('peer');

// process.env.PORT is required by Koyeb to dynamically assign a port
const port = process.env.PORT || 9000;

// Initialize the PeerJS signaling server
const peerServer = PeerServer({ 
  port: port, 
  path: '/myapp',
  allow_discovery: true
});

peerServer.on('connection', (client) => {
  console.log(`Client connected: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`Client disconnected: ${client.getId()}`);
});

console.log(`PeerJS Signaling Server running on port ${port}`);
