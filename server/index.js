const express = require('express');
const parse = require('body-parser');
const route = require('./routes');
const yelp = require('yelp-fusion');
require('dotenv').config();

const client = yelp.client(process.env.APIKEY);

const app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: false }));

app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/../client`));

app.use('/', route);

app.get('/yelp/:term', (req, res) => {
  const { term } = req.params;
  client.search({
    term,
    location: 'san francisco, ca',
  }).then(response => res.send(response.jsonBody.businesses[0]))
    .catch((e) => { throw new Error(e); });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line
});

module.exports = app;

