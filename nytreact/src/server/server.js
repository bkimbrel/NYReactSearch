require('dotenv').config({path: './config/.env'});

const request = require('request')
const express = require('express');
const bodyParser = require('body-parser');
const articleRouter = require('./routes/article');
const app = express()

const mongoose = require('mongoose');
const mongod = mongoose.connect(process.env.MONGODB_KEY);
mongoose.connection.on('connected',()=>{
  console.log('success connect Mongo');
});

mongoose.connection.on('error',function (err) {
 console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());
app.use('/api/saved', articleRouter);
app.post('/api/search', (req, res) => {
  console.log('search in', req.body);

  const options = { method: 'GET',
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    qs: req.body,
    headers:
     {'api-key': process.env.NYT_API_KEY}
   };

   request(options, (err, response, body) => {
    //  console.log('Show me the results', response, process.env.NYT_API_KEY);
     res.send(response);

   });
});
app.listen(3001, function(){
  console.log('server started on 3001');
});
