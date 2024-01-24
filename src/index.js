const express = require('express')
const dotenv  = require('dotenv');
dotenv.config();

const app = express()
const bodyParser = require("body-parser");
const port = 8080

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importing orders router
const ordersRoute = require('./ordersRoute');

//Creating table and seeding it with the data
require('./createDatabase')

//creating view for home route that facilitates all the apis
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/api', ordersRoute)

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;