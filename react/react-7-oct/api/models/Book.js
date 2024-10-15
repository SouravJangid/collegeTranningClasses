const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
     title:{type: 'string'},
     pages:{type: 'string'},
     auther:{type: 'string'},
     // mobile:{type: 'string'},
     // password:{type: 'string'}
})

module.exports = mongoose.model('Book', BookSchema);