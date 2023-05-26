const express = require('express')
const router = express.Router()

const { allService } = require('../controllers/serviceController')
const { userAuth } = require('../middleware/auth')
const { userRole } = require('../middleware/roles')

router.get('/services', userAuth, userRole("user"), allService)

module.exports = router
