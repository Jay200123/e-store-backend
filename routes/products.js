const express = require('express')

const router = express.Router()

const { allProducts } = require('../controllers/productController')

router.get('/products', allProducts)

module.exports = router