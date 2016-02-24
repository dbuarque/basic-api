/**
 * Created by dbuarque on 2/24/16.
 */
import mongoose from 'mongoose';
import Users from '../models/users';
import { MongoClient } from 'mongodb';
import assert from 'assert';


let importData = function(db, callback){
    console.log("Importing Data...");

    let json = require('./users.json');

    // Bulk insert
    let collection = db.collection('users');

    let data = json.results.map(item => item.user);

    collection.insertMany(data, function(err, result) {
        if(err) {
            throw 'Import Data Exception';
            process.exit(1);
        };

        assert.equal(err, null);
        callback(result);
    });
};

export function load(callback){

    const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/basicapi';

    MongoClient.connect(MONGO_URL, function(err, db) {
        assert.equal(null, err);

        importData(db, function (result) {
            console.log('Imported Records: '+result.insertedCount);
            db.close();
            callback();
        })

    });
}