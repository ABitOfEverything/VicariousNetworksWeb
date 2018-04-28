var https = require('https');

var fetch = require('node-fetch');
var express = require('express');
var statusapp = express()




function getPing() {
  return new Promise((resolve, reject) => {
    fetch('https://cf59b00e-9824-4bd3-bddc-e88257604288.mock.pstmn.io/ping')
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
};


function getPlayers() {
  return new Promise((resolve, reject) => {
    fetch('https://cf59b00e-9824-4bd3-bddc-e88257604288.mock.pstmn.io/players')
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
};

exports.getPing = getPing;
exports.getPlayers = getPlayers;
