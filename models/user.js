const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema ({
  username: { type: String },
  password: { type: String },
  salt: { type: String },
  email: { type: String },
  tutorEmail: { type: String },
  products: { type: Array, default: [] },
  created: { type: Date },
  confirmed: { type: Boolean },
  status: { type: Boolean }
})

module.exports = mongoose.model('User', user)