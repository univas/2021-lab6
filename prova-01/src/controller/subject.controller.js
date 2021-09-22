const subjectService = require('../service/subject.service')

const create = (req, res) => {
  if (validateFields(res, req.body)) {
    subjectService.create(req.body)
    res.status(201).send('Subject create successfully!')
  }
}

const listAll = (req, res) => res.send(subjectService.listAll())

const update = (req, res) => {
  const subjectId = req.params.id

  const subject = subjectService.getById(subjectId)
  if (subject) {
    subjectService.update(req.params.id, req.body)
    res.send('Subject updated successfully!')
  } else {
    res.status(404).send('Subject not found')
  }
}

const remove = (req, res) => {
  const subjectId = req.params.id

  const subject = subjectService.getById(subjectId)
  if (subject) {
    subjectService.remove(req.params.id)
    res.send('Subject removed successfully!');
  } else {
    res.status(404).send('Subject not found')
  }
}

const getById = (req, res) => {
  const subject = subjectService.getById(req.params.id)
  if (subject) {
    res.send(subject)
  } else {
    res.status(404).send('Subject not found')
  }
}

const validateFields = (res, subject) => {
  if (!subject.name || subject.name.trim() == '') {
    res.status(400).send('Campo name é obrigatório!!!')
    return false
  }
  if (!subject.workload || subject.workload == '') {
    res.status(400).send('Campo workload é obrigatório!!!')
    return false
  }
  if (!subject.teacherName || subject.teacherName.trim() == '') {
    res.status(400).send('Campo teacherName é obrigatório!!!')
    return false
  }

  return true
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  getById
}