const express = require('express')
const path = require('path')
const app = express()



app.use(express.static(path.join(__dirname, 'public',)))


app.get('/sobre', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cartas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tutorial', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/alterarSenha', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/ativarConta', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/')
});

const PORT = process.env.PORT || 5000

app.listen(PORT)