const express = require('express')

const router = express.Router()

const { allProducts, storeProducts } = require('../controllers/productController')

router.get('/products', allProducts)
router.post('/products/store', storeProducts)

module.exports = router