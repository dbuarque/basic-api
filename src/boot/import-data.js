/**
 * Created by dbuarque on 2/24/16.
 */
import mongoose from 'mongoose';
import Users from '../models/users';
import { MongoClient } from 'mongodb';
import assert from 'assert';

// Count users
let countData = function (db, callback) {
    let collection = db.collection('users');

    let dataCount = collection.count(function (err, count) {
        assert.equal(err, null);
        callback(err, count);
    });
};

// Bulk insert
let importData = function(db, callback){
    console.log("Importing Data...");

    let collection = db.collection('users');
    let json = require('./users.json');
    let data = json.results.map(item => item.user);

    collection.insertMany(data, function(err, result) {
        assert.equal(err, null);
        callback(result);
    });
};

// Load the json
export function load(callback){

    const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/basicapi';

    MongoClient.connect(MONGO_URL, function(err, db) {
        assert.equal(null, err);

        countData(db, function (_err, count) {
            assert.equal(null, _err);

            if(count === 0){
                importData(db, function (result) {
                    console.log('Imported Records: '+result.insertedCount);
                    db.close();
                    callback();
                });
            }
        });
    });
}