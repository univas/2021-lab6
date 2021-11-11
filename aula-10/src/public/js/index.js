const socket = io()

const start = () => {
  document.getElementById('submit').onsubmit = submitLogin
  document.getElementById('form').onsubmit = submitMessage
}

const submitLogin = event => {
  event.preventDefault()

  document.getElementById('nick').style.display = 'none'
  document.getElementById('chat').hidden = false

  const username = document.getElementById('nickname').value
  const now = new Date()

  document.getElementById('name').innerHTML = username
  document.getElementById('time').innerHTML = `
    Logado: ${now.getHours()}:${now.getMinutes()} 
  `

  socket.emit('join', username)
}

const submitMessage = event => {
  event.preventDefault()
  const textArea = document.getElementById('textarea')
  const text = textArea.value
  textArea.value = ''

  const username = document.getElementById('nickname').value
  
  document.getElementById('chatMessage').innerHTML += createMessage('self', username, text)

  socket.emit('send', text)
}

socket.on('update', msg => {
  document.getElementById('chatMessage').innerHTML += `
    <li class="info">${msg}</li>
  `
})

socket.on('chat', (username, msg) => {
  document.getElementById('chatMessage').innerHTML += createMessage('xpto', username, msg)
})


const createMessage = (classname, username, text) => {
  const now = new Date()

  return `<li class="${classname}">
    <div class="msg">
      <span>${username}:</span>
      <p>${text}</p>
      <time>${now.getHours()}:${now.getMinutes()}</time>
    </div>
  </li>`
}

start()