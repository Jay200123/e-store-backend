const express = require('express')

const router = express.Router()

const { allUsers, storeUsers, getOneUser } = require('../controllers/userController')

router.get('/users', allUsers)
router.post('/users/store', storeUsers)
router.get('/users/:id', getOneUser)

module.exports = router