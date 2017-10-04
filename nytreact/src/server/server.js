require('dotenv').config({path: './config/.env'});
const request = require('request')
const express = require('express');
const bodyParser = require('body-parser');
const articleRouter = require('./routes/article');
const app = express()

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
