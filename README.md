# HTTPS Server with Node.js

This project demonstrates two simple methods to create an HTTPS server with Node.js.

## Prerequisites

- Node.js installed
- OpenSSL (usually comes with Git on Windows, pre-installed on macOS/Linux)

## Setup

1. **Generate SSL Certificate** (already done):
   ```bash
   openssl req -nodes -new -x509 -keyout server.key -out server.cert -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost/emailAddress=test@example.com"
   ```

## Method 1: Simple HTTPS Server (Recommended)

**File**: `https-server.js`

**Features**:
- Uses only Node.js built-in modules
- Minimal code
- Perfect for beginners

**Run**:
```bash
npm start
# or
node https-server.js
```

**Access**: https://localhost:3000

## Method 2: Express.js HTTPS Server

**File**: `express-https-server.js`

**Features**:
- Uses Express.js framework
- More features and routing capabilities
- Requires Express.js dependency

**Install Express** (if you want to use this method):
```bash
npm install express
```

**Run**:
```bash
node express-https-server.js
```

**Access**: https://localhost:3001

## Browser Security Warning

Since we're using a self-signed certificate, your browser will show a security warning. This is normal for development. Click "Advanced" and "Proceed to localhost" to continue.

## Files Generated

- `server.key` - Private key file
- `server.cert` - SSL certificate file
- `https-server.js` - Simple HTTPS server
- `express-https-server.js` - Express-based HTTPS server

## Recommendation

For your group challenge, **Method 1** (Simple HTTPS Server) is recommended because:
- ✅ No external dependencies needed
- ✅ Minimal code (easy to understand)
- ✅ Uses only Node.js built-in modules
- ✅ Perfect for learning HTTPS concepts