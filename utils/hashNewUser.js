'use strict'

const crypto = require('crypto')

const generateRandomString = (length) => {
	return crypto.randomBytes(Math.ceil(length / 2))
		.toString('hex')
		.slice(0, length)
}

const sha512 = (user, salt) => {
	const hash = crypto.createHmac('sha512', salt)
	hash.update(user.password)
	const value = hash.digest('hex')
	return {
    name: user.name,
    lastname: user.lastnames,
    city: user.city,
    state: user.state,
    country: user.country,
    username: user.username,
    password: value,
    salt: salt,
    email: user.email,
    tutorEmail: user.tutorEmail,
    products: user.products,
    created: new Date(),
    confirmed: user.confirmed,
    status: user.status
	}
}

const saltHashNewUser = (user) => {
	const salt = generateRandomString(16)
	return sha512(user, salt)
}

module.exports = {
	saltHashNewUser
}