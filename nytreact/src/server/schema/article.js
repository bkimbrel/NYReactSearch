const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Articles = new Schema({
  title: String,
  date: Date,
  url: String,
});

module.exports = mongoose.model(
  'articles',
  Articles
);
