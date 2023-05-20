const express = require('express')

const router = express.Router()

const { allProducts, storeProducts, getOneProducts, updateProducts } = require('../controllers/productController')

router.get('/products', allProducts)
router.post('/products/store', storeProducts)
router.get('/products/:id', getOneProducts)
router.put('/products/update/:id', updateProducts)

module.exports = router