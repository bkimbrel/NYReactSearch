var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
});

router.post('/', (req, res) => {
  console.log('POSTED!!');
  res.sendStatus(200);
});

router.delete('/', (req, res) => {
});

module.exports = router;
