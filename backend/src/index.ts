import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/ping', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

