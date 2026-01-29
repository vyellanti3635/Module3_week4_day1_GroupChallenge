// Simple HTTPS Server with Node.js
const https = require('https');
const fs = require('fs');

// Read the SSL certificate files
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Create the HTTPS server
const server = https.createServer(options, (req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send Hello World message
  res.end(`
    <html>
      <head><title>HTTPS Server</title></head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`HTTPS Server is running on https://localhost:${PORT}`);
});