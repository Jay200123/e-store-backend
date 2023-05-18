const express = require('express')

const router = express.Router()

const { allUsers } = require('../controllers/userController')

router.get('/users', allUsers)


module.exports = router