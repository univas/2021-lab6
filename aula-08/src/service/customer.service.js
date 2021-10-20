const { customer } = require('../models/index')

const listAll = async () => {
  return item = await customer.findAll()
}

const save = async data => {
  return item = await customer.create(data)
}

const update = async (customerId, data) => {
  return item = await customer.update(data, {
    where: {
      id: customerId
    }
  })
}

const remove = async customerId => {
  return item = await customer.destroy({
    where: {
      id: customerId
    }
  })
}

module.exports = {
  listAll,
  save,
  update,
  remove
}