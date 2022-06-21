const express = require('express');
const app = express();
const mongo = require('./connection/mongoconn');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3001;

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

const propertiesRoute = require('./routes/properties');
app.use('/properties', propertiesRoute);


app.listen(port, () => {
    console.log('server running');
});