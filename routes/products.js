const express = require('express')

const router = express.Router()

const { allProducts, storeProducts, getOneProducts } = require('../controllers/productController')

router.get('/products', allProducts)
router.post('/products/store', storeProducts)
router.get('/products/:id', getOneProducts)

module.exports = router