const fs = require('fs')

const fileName = '/home/rodrigo.faria/Github/2021-lab6/files/chamada.txt'

fs.readFileSync(fileName, 'UTF-8')
  .split(/\n/)
  .forEach(line => {
    console.log('Estou em uma nova linha:')
    console.log(line)
  })
