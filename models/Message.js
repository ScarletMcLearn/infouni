var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  email: {
    type: String,
    default: '',
    trim: true,
    required: 'Email required'

  },

  message: {
    type: String,
    default: '',
    trim: true,
    required: 'Email required'
  }
}

var Message = mongoose.model('Message', MessageSchema, 'messages');
module.exports = Message;
