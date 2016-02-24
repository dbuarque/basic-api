import express from 'express';
import db from './services/db'
import users  from './routes/users';
import { load } from './boot/import-data';

load(function (err) {
    if(err) throw err;

    var app = express();

    app.use(users);

    app.listen(3000, function () {
        console.log('Listening on port 3000!');
    });

});

