/**
 * Created by dbuarque on 2/24/16.
 */
// Bring Mongoose into the app
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/basicapi';

mongoose.connect(MONGO_URL);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + MONGO_URL);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
