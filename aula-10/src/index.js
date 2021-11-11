const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const clientes = {}

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
})

io.on('connection', client => {
  console.log('novo cliente conectado!')

  client.on('join', username => {
    clientes[client.id] = username
    client.broadcast.emit('update', 
      username + ' has joined the chat')
  })

  client.on('send', msg => {
    client.broadcast.emit('chat', clientes[client.id], msg)
  })

})

server.listen(3000, () => {
  console.log('server started on port 3000')
})