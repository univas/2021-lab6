const express = require('express')
const customerController = require('../controller/customer.controller')

const router = express.Router()

router.get('/', customerController.listAll)
router.post('/', customerController.save)
router.put('/:id', customerController.update)
router.delete('/:id', customerController.remove)

module.exports = router
