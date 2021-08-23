const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/faculdade', (req, res) => {
  res.send('Univás')
})

app.get('/aluno', (req, res) => {
  res.send('Rodrigo Luís de Faria')
})

const staticFolderPath = path.join(__dirname, 'files')

app.use('/arquivos/univas', express.static(staticFolderPath))

const port = 8087

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})
