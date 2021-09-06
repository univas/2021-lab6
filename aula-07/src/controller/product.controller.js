const listAll = (req, res) => {
  res.send('[PRODUCT] Estou no GET do controller!!!')
}

const create = (req, res) => {
  res.send('[PRODUCT] Estou no POST do controller!!!')
}

const update = (req, res) => {
  res.send('[PRODUCT] Estou no PUT do controller!!!')
}

const remove = (req, res) => {
  res.send('[PRODUCT] Estou no DELETE do controller!!!')
}

module.exports = {
  listAll,
  create,
  update,
  remove
}
