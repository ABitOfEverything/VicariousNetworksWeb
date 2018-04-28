var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var data = require('./data/data')
var status = require('./status/status')
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  res.send("hello")
});

app.get('/ping', function(req, res) {
  console.log("/ping app.get started")
  status.getPing().then((result) => {
    res.send(result)
    console.log("ping sent")
  }).catch((err) => {
    return res.send(err)
  })
});

app.get('/players', function(req, res) {
  console.log("/players app.get started")
  status.getPlayers().then((result) => {
    res.send(result.players)
    console.log("player list sent")
  }).catch((err) => {
    return res.send(err)
  })
});

app.get('/onlinecount', function(req, res) {
  console.log("/onlinecount app.get started")
  status.getPlayers().then((result) => {
    let jsonstring = `{"currentPlayerCount" : "${result.currentPlayerCount}"}`
    let jsonjson = JSON.parse(jsonstring)
    res.send(jsonjson)
    console.log("online count sent")
  }).catch((err) => {
    return res.send(err)
  })
});

app.get('/maxcount', function(req, res) {
  console.log("/maxcount app.get started")
  status.getPlayers().then((result) => {
    let jsonstring = `{"maxPlayerCount" : "${result.maxPlayerCount}"}`
    let jsonjson = JSON.parse(jsonstring)
    res.send(jsonjson)
    console.log("max count sent")
  }).catch((err) => {
    return res.send(err)
  })
});

app.listen(port, function() {
  console.log("Vicarious Network Backend is Working")
})
