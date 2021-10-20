const customerService = require('../service/customer.service')

const listAll = async (req, res) => {
  const item = await customerService.listAll()
  res.send(item)
}

const save = async (req, res) => {
  const item = await customerService.save(req.body)
  res.send(item)
}

const update = async (req, res) => {
  const item = await customerService.update(req.params.id, req.body)
  res.send(item)
}

const remove = async (req, res) => {
  await customerService.remove(req.params.id)
  res.send('Item removed with successful!') 
}

module.exports = {
  listAll,
  save,
  update,
  remove
}