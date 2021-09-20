const express = require('express')
const router = express.Router()
const subjectController = require('../controller/subject.controller')


router.post('/', subjectController.create)
router.get('/', subjectController.listAll)
router.get('/:id', subjectController.getById)
router.put('/:id', subjectController.update)
router.delete('/:id', subjectController.remove)

module.exports = router
