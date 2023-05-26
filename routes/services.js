const express = require('express')
const router = express.Router()

const { allService, storeService, getOneService, updateService, deleteService } = require('../controllers/serviceController')
const { userAuth } = require('../middleware/auth')
const { userRole } = require('../middleware/roles')

router.get('/services', userAuth, userRole("user"), allService)
router.post('/services/store', userAuth, userRole("admin"), storeService)
router.get('/services/:id', userAuth, userRole("user"), getOneService)
router.put('/services/update/:id', userAuth, userRole("admin"), updateService)
router.delete('/services/delete/:id', userAuth, userRole("admin"), deleteService)

module.exports = router
