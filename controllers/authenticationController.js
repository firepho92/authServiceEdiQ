const { readUser } = require('../services/authenticationService')
const { verifyPassword } = require('../utils/hashOperations')

const auth = async (req, res) => {
  const { user } = req.body
  try {
    const dbUser = await readUser(user)
    const response = await verifyPassword(user, dbUser.salt, dbUser.password)
    if(response) {
      res.send(dbUser)
    } else {
      res.status(401).send('Usuario o contraseña erróneos')
    }
  } catch(e) {
    if(e === 'Usuario o contraseña no erróneos') {
      res.status(401).send(e)
    } else {
      res.sendStatus(500)
    }
  }
}

module.exports = { auth }