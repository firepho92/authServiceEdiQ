const mongoose = require('mongoose')
const userSchema = require('../models/user')
const UserModel = mongoose.model('User')

const createUser = async (user) => {
  try {
    const newUser = new UserModel(user)
    return await newUser.save()
  } catch(e) {
    throw e
  }
}

module.exports = {
  createUser
}