const { Router } = require('express')
const User = require('../models').user
const router = new Router()
const bcrypt = require('bcrypt')

const { failRandomMiddleware } = require('../middlewares')

router.get('/', async (req, res, next) => {
  try {
    console.log('Im getting all the users')
    const users = await User.findAll()
    res.send(users)
  } catch (e) {
    next(e)
  }
})

router.post('/', failRandomMiddleware, async (request, res, next) => {
  try {
    console.log('body', request.body)
    const { email, name, password } = request.body

    if (!email || !password) {
      res.status(400).send('Users require an email and password to be created')
    } else {
      const hashed = bcrypt.hashSync(
        password, 10
      )
      const newUser = await User.create({
        email,
        name,
        password: hashed
      })
      res.send(newUser)
    }
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { age } = req.body

    const userToUpdate = await User.findByPk(id)

    console.log('new age: ', age)

    if (!userToUpdate) {
      return res.status(404).send('user not found')
    }

    await userToUpdate.update({ age })

    res.send(userToUpdate)
  } catch (e) {
    next(e)
  }
})

module.exports = router
