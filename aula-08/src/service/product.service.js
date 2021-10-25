const { product } = require('../models/index')

const listAll = async () => {
  return item = await product.findAll()
}

const save = async data => {
  return item = await product.create(data)
}

const update = async (productId, data) => {
  return item = await product.update(data, {
    where: {
      id: productId
    }
  })
}

const remove = async productId => {
  return item = await product.destroy({
    where: {
      id: productId
    }
  })
}

module.exports = {
  listAll,
  save,
  update,
  remove
}