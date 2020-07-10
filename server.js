const express = require('express');
const cors = require('cors');

// Start App
const app = express();
// Permission to send application data in json format
app.use(express.json());
// Allows access to all domains
app.use(cors());

app.use('/api', require('./src/routes'));

app.listen(3001);