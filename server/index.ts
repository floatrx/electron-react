import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // enable CORS

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

export const startServer = () => {
  app.listen(3000, 'localhost', () => {
    console.log('Server started on http://localhost:3000');
  });
};
