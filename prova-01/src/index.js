const express = require('express')
const swaggerUi = require('swagger-ui-express')
const subjectRouter = require('./route/subject.route')
const swaggerFile = require('../swagger.json')

const app = express()
app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/subjects', subjectRouter)

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})