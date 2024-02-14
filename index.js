const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('GET from localhost 3000')
  res.send('Hello')
})

app.get('/second', (req, res) => {
    res.send('GET from localhost 3000/second')
  })

app.post('/', (req, res) => {
    console.log('POST from localhost 3000')
    res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function foo() {

}