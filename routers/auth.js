const { Router } = require('express')
const { toJWT, toData } = require('../auth/jwt')
const User = require('../models').user
const bcrypt = require('bcrypt')

const router = new Router()

router.post('/login', async (request, response, next) => {
  try {
    const { email, password } = request.body
    console.log('email test:', email)
    console.log('password test:', password)
    const user = await User.findOne({ where: { email } })

    console.log('password test:', password)
    console.log('user.password test:', user.password)

    const passwordCorrect = bcrypt.compareSync(
      password, user.password
    )

    if (!passwordCorrect) {
      return response.status(400).send('Wrong password')
    }

    const data = { userId: user.id }
    const jwt = toJWT(data)

    return response.send({ jwt })
  } catch (error) {
    console.log(error)
  }
})

router.get('/secret', async (request, response, next) => {
  try {
    const { authorization } = request.headers

    if (!authorization) {
      return response.status(400).send('You must include an authorization header')
    }

    const parts = authorization.split(' ')
    const bearer = parts[0] === 'Bearer'

    if (!bearer) {
      return response.status(400).send('You must be the bearer')
    }

    const hasJwt = parts[1] && parts[1].length
    if (!hasJwt) {
      return response.status(400).send('You must include a JWT')
    }

    const data = toData(parts[1])
    const { userId } = data

    const user = await User.findByPk(userId)
    if (!user) {
      return response.status(400).send('You are not a user.')
    }

    console.log('user test:', user)

    const message = `Welcome to the secret area ${user.name}`
    response.send(message)
  } catch (error) {
    console.log(error)

    response.send(400)
  }
})

module.exports = router
