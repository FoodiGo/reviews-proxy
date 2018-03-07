const express = require('express');
const request = require('request');

const route = express.Router();


route.get('/restaurants/:restaurantId/reviews', (req, res) => {
  request({
    url: `http://localhost:8001${req.path}`,
    method: req.method,
  }).pipe(res);
});

route.put('/restaurants/:restaurantId/reviews/:reviewId', (req, res) => {
  request({
    url: `http://localhost:8001${req.path}`,
    method: req.method,
    json: req.body,
  }).pipe(res);
});


route.get('/title/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
  }).pipe(res);
});

route.get('/map/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
  }).pipe(res);
});

route.post('/', (req, res) => {
  request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
    form: req.body,
  }).pipe(res);
});


route.get('/pictures/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3000${req.path}`,
    method: req.method,
  }).pipe(res);
});


route.get('/information/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3400${req.path}`,
    method: req.method,
  }).pipe(res);
});

module.exports = route;
