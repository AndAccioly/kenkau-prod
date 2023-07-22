const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname + "/public")))

app.get('/', (req, res) => {
  res.send('https://www.kenkau.com/');
});

app.get('/sobre', (req, res) => {
  res.send('https://www.kenkau.com/sobre');
});


app.get('/cartas/*', (req, res) => {
  res.send('https://www.kenkau.com/cartas');
});

app.get('*', (req, res) => {
  res.send(req);
});

const PORT = process.env.PORT || 5000

app.listen(PORT)