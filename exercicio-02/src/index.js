const express = require('express')
const router = require('./route/imovel.route')

const app = express()
app.use(express.json())
app.use('/imoveis', router)

app.get('/', (req, res) => {
  res.send('Hello World 3.0!!!')
})

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})