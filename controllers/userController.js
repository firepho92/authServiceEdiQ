const { readUser, createUser } = require('../services/userService')
const { saltHashNewUser } = require('../utils/hashNewUser')

const getUser = async (req, res) => {
  const id = req.params['id']
  const result = await readUser(id)
  res.status(200).send(result)
}

const postUser = async (req, res) => {
  const { user } = req.body
  try {
    const hashedUser = saltHashNewUser(user)
    const result = await createUser(hashedUser)
    res.status(201).send(result)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = {
  getUser,
  postUser
}