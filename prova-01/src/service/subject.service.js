const database = []
let mySequenceId = 1

const create = subject => {
  subject.id = mySequenceId++
  database.push(subject)
}

const listAll = () => database

const update = (subjectId, subject) => {
  const subjectIndex = database.findIndex(
    sub => sub.id == subjectId
  )

  if (subjectIndex > -1) {
    database[subjectIndex] = subject
  }
}

const remove = subjectId => {
  const subjectIndex = database.findIndex(
    sub => sub.id == subjectId
  )

  if (subjectIndex > -1) {
    database.splice(subjectIndex, 1)
  }
}

const getById = subjectId => {
  const subjectIndex = database.findIndex(
    sub => sub.id == subjectId
  )

  if (subjectIndex > -1) {
    return database[subjectIndex]
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  getById
}