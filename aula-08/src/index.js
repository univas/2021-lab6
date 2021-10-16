const express = require('express')
const customerRoute = require('./route/customer.route')

const app = express()
app.use(express.json())
app.use('/customers', customerRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = 8087

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
