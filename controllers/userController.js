const { createUser } = require('../services/userService')

const postUser = async (req, res) => {
  const { user } = req.body
  try {
    const response = await createUser(user)
    res.status(201).send(response)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = {
  postUser
}