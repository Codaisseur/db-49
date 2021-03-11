const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m'

function toJWT (data) {
  const token = jwt.sign(
    data, secret, { expiresIn: '2h' }
  )

  return token
}

function toData (token) {
  const data = jwt.verify(token, secret)

  return data
}

module.exports = { toJWT, toData }
