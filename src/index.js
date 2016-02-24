import express from 'express';
import db from './services/db'
import users  from './routes/users';
const boot = require('./boot/import-data');

boot.load(function (err) {

    if(err) throw err;

    var app = express();

    app.use(users);

    app.listen(3000, function () {
        console.log('Listening on port 3000!');
    });

});

