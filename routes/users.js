const express = require('express')

const router = express.Router()

const { allUsers, storeUsers, getOneUser, updateUsers, deleteUser, userLogin, userLogout} = require('../controllers/userController')
const { userAuth } = require('../middleware/auth')
const { userRole } = require('../middleware/roles')

router.get('/users', userAuth, userRole('admin'), allUsers)
router.post('/users/store', storeUsers)
router.get('/users/:id', userAuth, getOneUser)
router.put('/users/update/:id', userAuth, updateUsers)
router.delete('/users/delete/:id', userAuth, userRole('admin'), deleteUser)

// routes for login and logout
router.post('/users/login', userLogin)
router.get('/logout', userLogout)


module.exports = router