'use strict'

const crypto = require('crypto')

const sha512 = (usuario, salt) => {
	const hash = crypto.createHmac('sha512', salt)
	hash.update(usuario.password)
	const value = hash.digest('hex')
	return {
		usuario: usuario.usuario,
		password: value,
	}
}

const saltHashPassword = (authData, salt) => {
	return sha512(authData, salt)
}

module.exports = {
	saltHashPassword
}