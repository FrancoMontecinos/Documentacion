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
const { request } = require('http');

const app = express();

app.get('/user', (req, res) =>{
   res.json({
       username: 'cameron',
       lastName: 'Howe'
   });
   
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