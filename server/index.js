const express = require('express');
const parse = require('body-parser');
const request = require('request');

const app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/../client`));

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  request({
    url: `http://localhost:8001${req.path}`,
    method: req.method,
  }).pipe(res);
});

app.put('/restaurants/:restaurantId/reviews/:reviewId', (req, res) => {
  request({
    url: `http://localhost:8001${req.path}`,
    method: req.method,
    json: req.body,
  }).pipe(res);
});


app.get('/title/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
  }).pipe(res);
});

app.get('/map/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
  }).pipe(res);
});

app.post('/', (req, res) => {
  request({
    url: `http://localhost:3001${req.path}`,
    method: req.method,
    form: req.body,
  }).pipe(res);
});


app.get('/pictures/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3000${req.path}`,
    method: req.method,
  }).pipe(res);
});


app.get('/information/:restaurantId', (req, res) => {
  request({
    url: `http://localhost:3400${req.path}`,
    method: req.method,
  }).pipe(res);
});


app.listen(8000, () => {
  console.log('Listening on port 8000'); // eslint-disable-line
});
