const express = require('express')

const router = express.Router()

const { allUsers, storeUsers, getOneUser, updateUsers, deleteUser, userLogin, userLogout} = require('../controllers/userController')
const { userAuth } = require('../middleware/auth')
const { userRole } = require('../middleware/roles')

router.get('/users', userAuth, userRole('admin'), allUsers) //fetch all users from the database
router.post('/users/store', storeUsers) //store users
router.get('/users/:id', userAuth, getOneUser) //find user by id
router.put('/users/update/:id', userAuth, updateUsers) //update user
router.delete('/users/delete/:id', userAuth, userRole('admin'), deleteUser) //delete user

// routes for login and logout
router.post('/users/login', userLogin) //user login
router.get('/logout', userLogout) //user logout


module.exports = router