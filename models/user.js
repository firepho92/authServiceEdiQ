const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema ({
  name: { type: String },
  lastname: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  username: { type: String },
  password: { type: String },
  salt: { type: String },
  email: { type: String },
  tutorEmail: { type: String },
  userType: { type: String },
  products: { type: Array, default: [] },
  created: { type: Date },
  confirmed: { type: Boolean },
  status: { type: Boolean }
})

module.exports = mongoose.model('User', User)