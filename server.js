//Initialize express
const express = require('express');
const app = express()
const port = 8000;

//Mongoose File
require('./server/config/mongoose');

//Middleware import for cleaner server.js file
require('./server/config/middleware')(app)

//Import routes
require('./server/config/routes')(app)


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
