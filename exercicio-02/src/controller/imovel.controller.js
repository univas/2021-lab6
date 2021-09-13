const service = require('../service/imovel.service')

const create = (req, res) => {
  service.create(req.body)
  res.send('Imovel create successfully!')
}

const listAll = (req, res) => {
  res.send(service.listAll())
}

const update = (req, res) => {
  service.update(req.params.id, req.body)
  res.send('Imovel update successfully!')
}

const remove = (req, res) => {
  service.remove(req.params.id)
  res.send('Imovel remove successfully!')
}

module.exports = {
  create,
  listAll,
  update,
  remove
}

