const express = require('express')

const app = express()
app.use(express.json())
const myDatabase = []

app.get('/', (req, res) => {
  res.send(myDatabase)
})

app.get('/:id', (req, res) => {
  const student = myDatabase.find(student => student.cpf === req.params.id)
  res.send(student)
})

app.post('/', (req, res) => {
  myDatabase.push(req.body)
  res.send('Student created successfully!')
})

app.put('/:id', (req, res) => {
  const studentIndex = myDatabase.findIndex(student => student.cpf === req.params.id)
  if (studentIndex >= 0) {
    myDatabase[studentIndex] = req.body
    res.send('Student updated successfully!')
  }
})

app.delete('/:id', (req, res) => {
  const studentIndex = myDatabase.findIndex(student => student.cpf === req.params.id)
  if (studentIndex >= 0) {
    myDatabase.splice(studentIndex, 1)
    res.send('Student deleted successfully!')
  }
})

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})
