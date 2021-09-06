const express = require('express')
const router = express.Router()
const customerController = require('../controller/customer.controller')

router.get('/', customerController.listAll)
router.post('/', customerController.create)
router.put('/:id', customerController.update)
router.delete('/:id', customerController.remove)

module.exports = router