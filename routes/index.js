const { Router } = require('express')

const router = Router()

//Auth
router.get('/', async (req, res) => res.sendStatus(200))
router.post('/', async(req, res) => res.sendStatus(200))

module.exports = router