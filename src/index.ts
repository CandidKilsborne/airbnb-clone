import express from 'express';
import bodyParser from 'body-parser';

import { listings } from './listings';

const app = express();
const port = 9000;

app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('visit /listings'));

app.get('/listings', (_req, res) => {
  res.send(listings);
});

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    return res.send(listings.splice(i, 1));
  }

  return res.send('failed to delete listing');
});

app.listen(port);

console.log(`[app] listening on http://localhost:${port}`);
