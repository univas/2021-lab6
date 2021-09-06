const customerDatabase = []

const listAll = () => customerDatabase

const create = customer => {
  customerDatabase.push(customer)
}

const update = (customerId, customer) => {
  const customerIndex = customerDatabase.findIndex(
    customer => customer.id == customerId
  )

  if (customerIndex > -1) {
    customerDatabase[customerIndex] = customer
  }
}

const remove = customerId => {
  const customerIndex = customerDatabase.findIndex(
    customer => customer.id == customerId
  )

  if (customerIndex > -1) {
    customerDatabase.splice(customerIndex, 1)
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove
}