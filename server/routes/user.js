const router = require('express').Router()
const { UserController } = require('../controllers')

router.get('/', (req, res, next) => res.send('from user'))
router.post('/register',  UserController.register)
router.post('/login', UserController.login)
router.post('/google', UserController.google)

module.exports = router