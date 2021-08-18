const fs = require('fs')

const fileName = '/home/rodrigo.faria/Github/2021-lab6/myoutputfile.txt'

try {
  
  //jeito 1
  //fs.writeFileSync(fileName, 'Hello World 2!!!')


  //jeito 2
  // const options = {
  //   flag: 'a+'
  // }

  // fs.writeFileSync(fileName, 'Hello World 3!!!', options)

  //jeito 3
  fs.appendFileSync(fileName, '\nHello World 4!!!\n')

} catch(err) {
  console.error(`Failed to write data in file: ${err}`)
}
