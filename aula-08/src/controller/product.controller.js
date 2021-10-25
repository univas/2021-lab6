const productService = require('../service/product.service')

const listAll = async (req, res) => {
  const item = await productService.listAll()
  res.send(item)
}

const save = async (req, res) => {
  const item = await productService.save(req.body)
  res.send(item)
}

const update = async (req, res) => {
  const item = await productService.update(req.params.id, req.body)
  res.send(item)
}

const remove = async (req, res) => {
  await productService.remove(req.params.id)
  res.send('Item removed with successful!')
}

module.exports = {
  listAll,
  save,
  update,
  remove
}