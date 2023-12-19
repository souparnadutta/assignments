const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
const PORT=3000;
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)


const rateLimitMiddleware = (req, res, next) => {
  const userId = req.headers['user-id'];

  // Ignore requests without a user ID
  // if (!userId) {
  //   return res.status(400).send('User ID not provided');
  // }

  // Check if the user has exceeded the rate limit
  if (numberOfRequestsForUser[userId] > 5 ) {
    return res.status(404).send('Too many requests sent. Please limit the number of requests sent');
  }

  // Increment the request count for the user
  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;
  numberOfRequestsForUser[userId] += 1;

  next();
};

app.use(rateLimitMiddleware);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.use('/',(req,res)=>{
  res.status(404).send('Invalid route/method entered')
})

app.listen(PORT,()=>{
  console.log('Server listening at port',PORT)
})


module.exports = app;