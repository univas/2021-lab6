const express = require('express')
const router = express.Router()
const controller = require('../controller/imovel.controller')

router.post('/', controller.create)
router.get('/', controller.listAll)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router