const fs = require('fs')
const readLine = require('readline')

const fileName = '/home/rodrigo.faria/Github/2021-lab6/files/chamada.txt'

const readInterface = readLine.createInterface({
  input: fs.createReadStream(fileName)
})

readInterface.on('line', line => {
  console.log('Estou lendo uma linha nova:')
  console.log(line)
})
