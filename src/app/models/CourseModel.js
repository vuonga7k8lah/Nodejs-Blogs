const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: 'hahaha' },
  description: { type: String, default: '' },
  slug: { type: String, default: '' },
  image: { type: String, default: '' },
},{
  timestamps: true,
});
module.exports = mongoose.model('Course', Course);
