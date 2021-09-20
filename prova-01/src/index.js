const express = require('express')
const subjectRouter = require('./route/subject.route')

const app = express()
app.use(express.json())

app.use('/subjects', subjectRouter)

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})