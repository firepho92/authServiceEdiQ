const { readUser, loginIntoHeritageService } = require('../services/authenticationService')
const { verifyPassword } = require('../utils/hashOperations')

const auth = async (req, res) => {
  const { user } = req.body
  try {
    const dbUser = await readUser(user)
    const response = verifyPassword(user, dbUser.salt, dbUser.password)
    if(response) {
      const token = await loginIntoHeritageService(dbUser)
      console.log(dbUser)
      res.send({ token: token.data, id: dbUser._id })
    } else {
      res.status(401).send('Usuario o contraseña erróneos')
    }
  } catch(e) {
    if(e === 'Usuario o contraseña erróneos') {
      res.status(401).send(e)
    } else {
      res.sendStatus(500)
    }
  }
}

module.exports = { auth }