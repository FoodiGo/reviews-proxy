const express = require('express');
const parse = require('body-parser');
const route = require('./routes');

require('dotenv').config();

const app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: false }));

app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/../client`));

app.use('/', route);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line
});

module.exports = app;

