const request = require('supertest');
const assert = require('assert');
const express = require('express');
const PORT=3000;

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

//Handles errors
const errorHandlerMiddleware = (err,req,res,next)=>{
   if(err){
    errorCount+=1
    res.status(404).send(err.message)
   }else{  
   next();
   }
}

//Handles invalid route
const invalidRouteHandlerMiddleware = (req,res)=>{
  res.status(404).send('Invalid route/method entered')
  errorCount+=1
}

app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

app.use('/',invalidRouteHandlerMiddleware)

app.use(errorHandlerMiddleware)

app.listen(PORT,()=>{
  console.log('Server listening at port',PORT)
})

module.exports = app;