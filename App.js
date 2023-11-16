// import express
const express = require('express');

/**
 * import body-parser
 * body-parser is used to process data in an HTTP request body
 */
const bodyParser = require('body-parser');

// create an instance of express
const app = express();

// specify the port number to run the app
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/**
 * import user routes (POST< GET, DELETE and PATCH)
 * This is done to make the code cleaner
 */
const users_routes = require('./Users');

/**
 * to set the default endpoint for user routes
 * the base/root url is localhost:3000/api
 * get user full url is localhost:3000/api/users
 */
app.use('/api', users_routes);


// to start the server using the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
