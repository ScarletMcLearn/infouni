var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UniversitySchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  loc: {
    type: String,
    default: '',
    trim: true,
    required: 'Location required'

  },
  no_st: {
    type: String,
    default: '',
    trim: true

  },
  scholarship: {
    type: String,
    default: '',
    trim: true

  },
  amount: {
    type: String,
    default: '',
    trim: true

  },
   phd: {
    type: String,
    default: '',
    trim: true

  },
 

}

var University = mongoose.model('Universty', UniversitySchema, 'universities');
module.exports = University;
