const database = []

const create = imovel => {
  database.push(imovel)
}

const listAll = () => database

const update = (imovelId, imovel) => {
  const indexImovel = database.findIndex(
    oldImovel => oldImovel.id == imovelId
  )

  if (indexImovel != -1) {
    database[indexImovel] = imovel
  }
}

const remove = imovelId => {
  const indexImovel = database.findIndex(
    imovel => imovel.id == imovelId
  )

  if (indexImovel != -1) {
    database.splice(indexImovel, 1)
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove
}