const { verify } = require('../services/authenticationService')

const auth = async (req, res) => {
  const { user } = req.body
  try {
    const authentication = await verify(user)
    if(!authentication.status) {
      res.status(401).send('Usuario o contraseña erróneos')
    } else {
      res.send(true)//se debe enviar el usuario
    }
  } catch(e) {
    res.send(500)
  }
}