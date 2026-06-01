const { PeerServer } = require('peer');

// Hugging Face automatically routes traffic through port 7860
const port = process.env.PORT || 7860;

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

console.log(`PeerJS Signaling Server running on Hugging Face port ${port}`);
