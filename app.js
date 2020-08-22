const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const SW = require('./model/sw')
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

app.get('/', (req, res) => {
  SW.find()
    .sort({ attribute: 'desc', grade: 'desc', artifact_type: 'desc' })
    .lean()
    .then(data => res.render('index', { data }))
    .catch(error => { console.log(error) })
})

app.get('/:type', (req, res) => {
  const attribute = req.params.type
  SW.find({ attribute: attribute })
    .sort({ artifact_type: 'desc' })
    .lean()
    .then(data => res.render('index', { data }))
    .catch(error => console.log(error))
})



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})