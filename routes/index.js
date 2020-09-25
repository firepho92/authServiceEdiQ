const { Router } = require('express')
const { getUser, postUser } = require('../controllers/userController')
const { auth } = require('../controllers/authenticationController')
const router = Router()

//Users
router.get('/users', async (req, res) => res.sendStatus(200))
router.get('/user/:id', getUser)
router.post('/user', postUser)
//Auth
router.get('/auth', async (req, res) => res.sendStatus(200))
router.post('/auth', auth)
//Confirm
router.get('/confirmation/:token', )

module.exports = router