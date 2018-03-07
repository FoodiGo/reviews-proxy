const express = require('express');
const parse = require('body-parser');
const route = require('./routes');

const app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: false }));

app.set('view engine', 'pug');

app.get('/restaurants/:restaurantId', (req, res) => {
  res.render('index', { id: req.params.restaurantId });
});

app.use(express.static(`${__dirname}/../client`));

app.use('/', route);

app.listen(8000, () => {
  console.log('Listening on port 8000'); // eslint-disable-line
});

module.exports = app;

