console.log('Exemplo de Callback')

setTimeout(
  function() {
    console.log('Executando tarefa 1.0!!!')
  },
  1000
)

setTimeout(() => console.log('Executando tarefa 2.0!!!'), 1500)

const myMethod = () => console.log('Executando tarefa 3.0!!!')

setTimeout(myMethod, 2000)

console.log('Print depois do setTimeout')

console.log('Exemplo de Promise')

const myResolvedPromise = () => new Promise((resolved, rejected) => {
  resolved('Deu certo resolver a promise')
})

myResolvedPromise()
  .then(data => console.log(data))

const myRejectedPromise = () => new Promise((resolved, rejected) => {
  rejected('Não deu bom resolver essa promise')
})

myRejectedPromise()
  .catch(error => console.log(error))

const now = (new Date()).getMinutes()

const myPromise = () => new Promise((resolved, rejected) => {
  if (now % 2 == 0) {
    resolved('Estou em um número PAR')
  } else {
    rejected('Estou em um número ÍMPAR')
  }
})

myPromise()
  .then(data => console.log(data))
  .catch(error => console.log(error))


console.log('Exemplo de Async/Await')

const myFuturePromise = () => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => resolved('resolvi o trem'), 4000)
  })
}

const mySecondMethod = async() => {
  console.log('Estou entrando no segundo metodo')
  
  const data = await myFuturePromise()
  console.log(data)

  console.log('Estou saindo do segundo metodo')
}

mySecondMethod()



