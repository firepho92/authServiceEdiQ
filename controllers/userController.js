const { createUser } = require('../services/userService')
const { saltHashNewUser } = require('../utils/hashNewUser')

const postUser = async (req, res) => {
  const { user } = req.body
  try {
    const hashedUser = saltHashNewUser(user)
    const response = await createUser(hashedUser)
    res.status(201).send(response)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = {
  postUser
}