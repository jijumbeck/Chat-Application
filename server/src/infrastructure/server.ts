import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
