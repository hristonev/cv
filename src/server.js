// const express = require('express');
// const bodyParser = require('body-parser');
// const models = require('./data/models');
import express from 'express';
import models from './data/models/index.js';

const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
//
// app.post('/api/data', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

const promise = models
  .sync()
  .catch(err => console.error(err.stack))
;
promise.then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
