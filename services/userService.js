const mongoose = require('mongoose')
const userSchema = require('../models/user')
const UserModel = mongoose.model('User')

const readUser = async (id) => {
  try {
    const user = await UserModel.findById(id)
    return user
  } catch(e) {
    throw e
  }
}

const createUser = async (user) => {
  try {
    const newUser = new UserModel(user)
    return await newUser.save()
  } catch(e) {
    throw e
  }
}

module.exports = {
  readUser,
  createUser
}