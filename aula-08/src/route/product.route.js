const express = require('express')
const productController = require('../controller/product.controller')

const router = express.Router()

router.get('/', productController.listAll)
router.post('/', productController.save)
router.put('/:id', productController.update)
router.delete('/:id', productController.remove)

module.exports = router