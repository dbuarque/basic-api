import express from 'express';
import compression from 'compression';

import db from './services/db'
import users  from './routes/users';
import bodyParser from 'body-parser';
import { loadAsync } from './boot/import-data';

loadAsync(function (err) {
    if(err) throw err;
    console.log('Everything is loaded!')
});

var app = express();

app.use(bodyParser.json());
app.use(users);

var server = app.listen(3000, function () {
    console.log('Listening on port 3000!');
});

module.exports = server;