import express from 'express';
import models, { User } from './data/models/index.js';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.get('/api/users', async (req, res) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => res.send(err))
  ;
});

app.post('/api/users', async (req, res) => {
  const now = new Date();
  const user = await User.create({
    ...req.body,
    createdAt: now,
    updatedAt: now
  });
  res.send(user);
});

const promise = models
  .sync()
  .catch(err => console.error(err.stack))
;
promise.then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
