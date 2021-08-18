const fs = require('fs')

const folderName = '/home/rodrigo.faria/Github/2021-lab6/aula-132'

if (fs.existsSync(folderName)) {
  console.log(`The folder "${folderName}" already exist!`)

} else {
  console.log(`The folder "${folderName}" not exist yeat!`)
  console.log(`Creating folder: "${folderName}"`)
  
  fs.mkdirSync(folderName)
  console.log('Folder created successfully!')

  console.log(`Deleting folder: "${folderName}"`)
  fs.rmdirSync(folderName)

  console.log('Folder deleted successfully!')
}
