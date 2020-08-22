const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const routes = require('./routes')
const PORT = 3000

const app = express()

mongoose.connect('mongodb://localhost/SW', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error!')
})
db.once('open', () => {
  console.log('mongoDB connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(routes)



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})