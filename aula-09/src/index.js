const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})

io.on('connection', socket => {
  console.log('Temos um novo usuário')

  socket.on('disconnect', () => {
    console.log('Usuario deixou o chat')
  })

  socket.on('message', msg => {
    io.emit('message2', msg)
  })
})

server.listen(3000, () => {
  console.log('Server started on port 3000')
})


