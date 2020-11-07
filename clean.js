const fs = require('fs');
fs.rmdirSync('./dist', { recursive: true });
fs.rmdirSync('./docs', { recursive: true });