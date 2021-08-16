const fs = require('fs')

const fileName = '/home/rodrigo.faria/Github/2021-lab6/files/chamada.txt'

const contentFile = fs.readFileSync(fileName, 'utf-8')

console.log(`Lendo o arquivo: ${fileName}`)
console.log(contentFile)
