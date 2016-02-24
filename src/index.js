import express from 'express';

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Hello World!');
});

app.delete('/', function (req, res) {
    res.send('Hello World!');
});

app.put('/', function (req, res) {
    res.send('Hello World!');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});