const express = require('express');
const parse = require('body-parser');
const request = require('request');

const app = express();

app.use(parse.json());

app.use(express.static(`${__dirname}/../client`));

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  request({
    url: `http://localhost:8001${req.path}`,
    method: req.method,
  }).pipe(res);
});


app.listen(8000, () => {
  console.log('Listening on port 8000'); // eslint-disable-line
});
