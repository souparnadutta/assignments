const request = require('supertest');
const assert = require('assert');
const express = require('express');
const PORT=3000

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const requestCountMiddleware = (req,res,next)=>{
  requestCount+=1
  next()
}

app.use('/',requestCountMiddleware)

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.use('/',(req,res)=>{
  res.status(404).send("Invalid route/method entered")
})


app.listen(PORT,()=>{
  console.log('Server listening at PORT '+PORT)
})

module.exports = app;