require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true,
    hostname: process.env.HOSTNAME
  }).status(200).end;
})

app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    users: [{
        name: 'John',
        email: 'john@example.com'
      },
      {
        name: 'Mary',
        email: 'mary@example.com'
      }
    ]
  }).status(200).end;
})

app.listen(3000, () => {
  console.log('Example app listening! Host:', process.env.HOSTNAME);
});