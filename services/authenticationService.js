const mongoose = require('mongoose')
const userSchema = require('../models/user')
const UserModel = mongoose.model('User')
const axios = require('axios')

const readUser = async (authData) => {
  try {
    const user = await UserModel.findOne({ 'username': authData.username }, 'username password salt userType confirmed status')
    if(!user) throw 'Usuario o contraseña no erróneos'
    return user
  } catch(e) {
    throw e
  }
}

const login = async (user) => {
  try {

  } catch(e) {
    
  }
}

module.exports = {
  readUser
}