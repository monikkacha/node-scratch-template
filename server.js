let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

var port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('hello world , it is monik here'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

var db = mongoose.connection;

if (db)
    console.log("db connected successfully");
else
    console.log("Something went wrong with db connection");

app.listen(port, () => console.log("server is up and running"));