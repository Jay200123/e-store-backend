const express = require('express')

const router = express.Router()

const { allUsers, storeUsers, getOneUser, updateUsers, deleteUser } = require('../controllers/userController')

router.get('/users', allUsers)
router.post('/users/store', storeUsers)
router.get('/users/:id', getOneUser)
router.put('/users/update/:id', updateUsers)
router.delete('/users/delete/:id', deleteUser)

module.exports = router