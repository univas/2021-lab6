const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello World!!!')
})

const port = 8087

server.listen(port, () => {
  console.log(`Started server on port ${port}`)
})
