const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hii CI/CD! UPDATEDD!');
});

app.listen(port, () => {
  console.log(`The application runs at http://localhost:${port}`);
});