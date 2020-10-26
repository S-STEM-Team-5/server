const http = require('http');
const express = require('express');
const path = require('path');

// Express implementation 
const app = express();
app.listen(`3002`);
app.use('/', express.static(path.resolve('./htmls')));
