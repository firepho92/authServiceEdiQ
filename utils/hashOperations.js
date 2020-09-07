'use strict'

const crypto = require('crypto')

const verifyPassword = (user, salt, password) => {
	const hash = crypto.createHmac('sha512', salt)
	hash.update(user.password)
	const value = hash.digest('hex')
	return password === value
}

module.exports = {
	verifyPassword
}