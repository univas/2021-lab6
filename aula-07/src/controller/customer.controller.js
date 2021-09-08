const customerService = require('../service/customer.service')

const listAll = (req, res) => {
  res.send(customerService.listAll())
}

const create = (req, res) => {
  customerService.create(req.body)
  res.send('Customer create successfully!')
}

const update = (req, res) => {
  customerService.update(req.params.id, req.body)
  res.send('Customer has been updated!')
}

const remove = (req, res) => {
  customerService.remove(req.params.id)
  res.send('Customer has been deleted!')
}

module.exports = {
  listAll,
  create,
  update,
  remove
}
