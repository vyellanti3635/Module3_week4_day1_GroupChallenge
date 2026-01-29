// HTTPS Server using Express.js
const https = require('https');
const express = require('express');
const fs = require('fs');

// Create Express app
const app = express();

// SSL certificate options
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Define routes
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Express HTTPS Server</title></head>
      <body>
        <h1>Hello World from Express!</h1>
        <p>This is a secure HTTPS server using Express.js</p>
        <p>Server is running on: <strong>https://localhost:3001</strong></p>
      </body>
    </html>
  `);
});

// Create HTTPS server with Express app
const PORT = 3001;
https.createServer(options, app).listen(PORT, () => {
  console.log(`🔒 Express HTTPS Server is running on https://localhost:${PORT}`);
  console.log('Note: You may see a security warning in your browser because this uses a self-signed certificate.');
});