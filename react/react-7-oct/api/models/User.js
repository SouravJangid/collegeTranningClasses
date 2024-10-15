const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
     firstName:{type: 'string'},
     lastName:{type: 'string'},
     email:{type: 'string'},
     mobile:{type: 'string'},
     password:{type: 'string'}
})

module.exports = mongoose.model('User', UserSchema);