const express = require('express')
const router = express.Router()

const { allService, storeService, getOneService } = require('../controllers/serviceController')
const { userAuth } = require('../middleware/auth')
const { userRole } = require('../middleware/roles')

router.get('/services', userAuth, userRole("user"), allService)
router.post('/services/store', userAuth, userRole("admin"), storeService)
router.get('/services/:id', userAuth, userRole("user"), getOneService)

module.exports = router
