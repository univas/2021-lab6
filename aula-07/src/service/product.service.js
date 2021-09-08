const productDatabase = []

const listAll = () => productDatabase

const create = product => {
  productDatabase.push(product)
}

const update = (productId, product) => {
  const productIndex = productDatabase.findIndex(
    product => product.id == productId
  )

  if (productIndex > -1) {
    productDatabase[productIndex] = product
  }
}

const remove = productId => {
  const productIndex = productDatabase.findIndex(
    product => product.id == productId
  )

  if (productIndex > -1) {
    productDatabase.splice(productIndex, 1)
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove
}