const express = require('express')

const router = express.Router()

const { allProducts, storeProducts, getOneProducts, updateProducts, deleteProducts } = require('../controllers/productController')
const { userAuth } = require('../middleware/auth')
const { userRole } = require('../middleware/roles')

router.get('/products', userAuth, userRole('admin'), allProducts)
router.post('/products/store', userAuth, userRole('admin'), storeProducts)
router.get('/products/:id', userAuth, userRole('admin'), getOneProducts)
router.put('/products/update/:id', userAuth, userRole('admin'), updateProducts)
router.delete('/products/delete/:id', userAuth, userRole('admin'), deleteProducts)


module.exports = router