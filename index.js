/* const http = require('http');

const server = http.createServer((req, res) =>{
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World')
});

server.listen(3000, ()=> {
   console.log('Server port on 3000');
}); */

const express = require('express');
const jwt = require('jsonwebtoken');
const { request } = require('http');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/user', (req, res) =>{
   res.json({
       username: 'cameron',
       lastName: 'Howe'
   });
   
});

app.get('/',(req,res) =>{
    res.json({
        text: 'API Trabajando !'
    });
});

app.post('/api/login', (req, res) =>{
    const user = {id: 3};
    const token = jwt.sign({user}, 'mi_clave_secreta');
    res.json({
        token
    });    
});

app.get('/api/protected', ensureToken,(req,res) =>{
    res.json({
        text: 'protected'   
    });   
});

function ensureToken(req,res, next) {
    const bearerHeader = req.headers['autorization'];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split("");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else
    {
        res.sendStatus(403);
    }
}

app.get('/index', (req,res)=>{
    res.send('Buena Cabros')    
});

app.post('/about', (req, res) =>{
    res.send('Peticion POST recibida');
});

app.put('/contact', (req, res) =>{
    res.send('Peticion PUT recibida');
});

app.delete('/test', (req, res) =>{
    res.send('<h1>Peticion DELETE recibida</h1>');
});

app.listen(5000, ()=> {
    console.log('Server port on 5000');
 });