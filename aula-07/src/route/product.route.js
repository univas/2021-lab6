const express = require('express')
const router = express.Router()
const productController = require('../controller/product.controller')

router.get('/', productController.listAll)
router.post('/', productController.create)
router.put('/:id', productController.update)
router.delete('/:id', productController.remove)

module.exports = router