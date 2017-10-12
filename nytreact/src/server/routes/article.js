const Articles = require('../schema/article.js');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  Articles.find().then((results) => {
    console.log('RESULTS!', results);
    res.json(results)

  }).catch((err) => {
    console.log('error', err);
  })
});

router.post('/', (req, res) => {
  console.log('POSTED!!',  req.body);
  const { headline, pub_date, web_url} = req.body
  const article = new Articles({
    title: headline.main,
    date: pub_date,
    url: web_url,
  });
  article.save().then(() => {
    console.log("Saved!");
  }).catch((err) => {
    console.log('error', err);
  })

  res.sendStatus(200);
});

router.delete('/', (req, res) => {
  console.log(req.body);
  Articles.remove({_id: req.body.id})
  .then((results) => {
    Articles.find().then((articles) => {
      res.send(articles)
    }).catch((err) => {
      console.log('error', err);
    })
    console.log("results", results);
  }).catch((err) => {
    console.log('error', err);
});
});

module.exports = router;
