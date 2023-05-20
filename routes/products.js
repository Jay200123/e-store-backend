const express = require('express')

const router = express.Router()

const { allProducts, storeProducts, getOneProducts, updateProducts, deleteProducts } = require('../controllers/productController')

router.get('/products', allProducts)
router.post('/products/store', storeProducts)
router.get('/products/:id', getOneProducts)
router.put('/products/update/:id', updateProducts)
router.delete('/products/delete/:id', deleteProducts)


module.exports = router