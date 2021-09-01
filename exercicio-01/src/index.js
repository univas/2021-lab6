const express = require('express')

const app = express()
app.use(express.json())

const customerDatabase = []
const productDatabase = []

//customer
app.get('/customers', (req, res) => {
  res.send(customerDatabase)
})

app.post('/customers', (req, res) => {
  customerDatabase.push(req.body)
  res.send('Customer has been created!')
})

app.put('/customers/:id', (req, res) => {
  const customerIndex = customerDatabase.findIndex(
    customer => customer.id == req.params.id
  )

  if (customerIndex > -1) {
    customerDatabase[customerIndex] = req.body
    res.send('Customer has been updated!')
  }
})

app.delete('/customers/:id', (req, res) => {
  const customerIndex = customerDatabase.findIndex(
    customer => customer.id == req.params.id
  )

  if (customerIndex > -1) {
    customerDatabase.splice(customerIndex, 1)
    res.send('Customer has been deleted!')
  }
})

//product
app.get('/products', (req, res) => {
  res.send(productDatabase)
})

app.post('/products', (req, res) => {
  productDatabase.push(req.body)
  res.send('Product has been created!')
})

app.put('/products/:id', (req, res) => {
  const productIndex = productDatabase.findIndex(
    product => product.id == req.params.id
  )

  if (productIndex > -1) {
    productDatabase[productIndex] = req.body
    res.send('Product has been updated!')
  }
})

app.delete('/products/:id', (req, res) => {
  const productIndex = productDatabase.findIndex(
    product => product.id == req.params.id
  )

  if (productIndex > -1) {
    productDatabase.splice(productIndex, 1)
    res.send('Product has been deleted!')
  }
})

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})