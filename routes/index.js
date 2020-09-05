const { Router } = require('express')
const { postUser } = require('../controllers/userController')

const router = Router()

//Users
router.get('/users', async (req, res) => res.sendStatus(200))
router.post('/user', postUser)
//Auth
router.get('/auth', async (req, res) => res.sendStatus(200))
router.post('/auth', async(req, res) => res.sendStatus(200))

module.exports = router