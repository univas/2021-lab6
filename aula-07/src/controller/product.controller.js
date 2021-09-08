const productService = require('../service/product.service')

const listAll = (req, res) => {
  res.send(productService.listAll())
}

const create = (req, res) => {
  productService.create(req.body)
  res.send('Product create successfully!')
}

const update = (req, res) => {
  productService.update(req.params.id, req.body)
  res.send('Product has been updated!')
}

const remove = (req, res) => {
  productService.remove(req.params.id)
  res.send('Product has been deleted!')
}

module.exports = {
  listAll,
  create,
  update,
  remove
}
