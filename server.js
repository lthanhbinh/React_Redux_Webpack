var express = require('express');
var app = express();
var https = require('https');
var path = require('path');
app.use(express.static('app'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});
app.use('/node_modules/', express.static('node_modules'));
app.use(express.static('app'));
app.use(function (req, res, next) {
    console.log(`Handling not found: ${req.url}`)
    res.status(200).sendFile(path.join(__dirname + '/app/index.html'))
})
app.listen(8080, function () {
    console.log("Started listening on port", 8080);
});






