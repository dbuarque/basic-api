'use strict';

const should = require('should');
const util = require('util');

describe('api', function() {
});
var request = require('supertest'),
    express = require('express');

var app = require('../src/index');

describe('Create a user', function(){
    it('responds with a json success message', function(done){
        request(app)
            .post('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(
                {
                    "gender": "female",
                    "email": "alison.reid@example2.com",
                    "username": "2",
                    "password": "rockon",
                    "salt": "lypI10wj",
                    "md5": "bbdd6140e188e3bf68ae7ae67345df65",
                    "sha1": "4572d25c99aa65bbf0368168f65d9770b7cacfe6",
                    "sha256": "ec0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
                    "registered": 1237176893,
                    "dob": 932871968,
                    "phone": "031-541-9181",
                    "cell": "081-647-4650",
                    "PPS": "3302243T",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/60.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
                    }
                }
            )
            .expect(200, done);
    });
});


describe('Update a user', function(){
    it('responds with a json success message', function(done){
        request(app)
            .post('/users/56ce57d50066d66e12498bda')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(
                {
                    "gender": "female",
                    "email": "alison.reid@abc.com",
                    "username": "xxxxxxx",
                    "password": "rockon!",
                    "salt": "lypI10wj",
                    "md5": "xxxxxx",
                    "sha1": "xxx",
                    "sha256": "xxxxxxxxx",
                    "registered": 1234123123,
                    "dob": 932871968,
                    "phone": "031-541-9181",
                    "cell": "081-647-4650",
                    "PPS": "3302243T",
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/60.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
                    }
                }
            )
            .expect(200, done);
    });
});

describe('List Users', function(){
    it('responds with a list of users in JSON', function(done){
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('Get a User', function(){
    it('responds with a single todo item in JSON based on the author', function(done){
        request(app)
            .get('/users/56ce57d50066d66e12498bda')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('Search a User', function(){
    it('responds with a single todo item in JSON based on the author', function(done){
        request(app)
            .get('/users/search?q=silvergorilla666')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
