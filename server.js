const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: "Maratona Full Cycle 2.0"});
});

app.listen(3000, () => {
  console.log('Webserver has started! Listening port 3000...')
});