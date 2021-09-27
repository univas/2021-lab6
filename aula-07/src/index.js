const express = require('express')
const swaggerUi = require('swagger-ui-express')
const customerRouter = require('./route/customer.route')
const productRouter = require('./route/product.route')
const swaggerFile = require('../swagger.json')

const app = express()
app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send('I am here!!!')
})

app.use('/customers', customerRouter)
app.use('/products', productRouter)

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})