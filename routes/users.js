const express = require('express')

const router = express.Router()

const { allUsers, storeUsers, getOneUser, updateUsers, deleteUser, userLogin, userLogout} = require('../controllers/userController')
const { userAuth } = require('../middleware/auth')

router.get('/users', userAuth, allUsers)
router.post('/users/store', storeUsers)
router.get('/users/:id', getOneUser)
router.put('/users/update/:id', updateUsers)
router.delete('/users/delete/:id', deleteUser)

// routes for login and logout
router.post('/users/login', userLogin)
router.get('/logout', userLogout)


module.exports = router