const express = require('express')
const cors = require('cors')
const connect = require('./connection')
const user = require('./routes/user')
const book = require('./routes/book')

const app = express()
connect()

app.use(cors())
app.use(user)
app.use(book)
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
