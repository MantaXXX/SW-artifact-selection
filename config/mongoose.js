const mongoose = require('mongoose')
const MONGOLAB_PURPLE_URI = process.env.MONGOLAB_PURPLE_URI || 'mongodb://localhost/SW'
mongoose.connect(MONGOLAB_PURPLE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error!')
})
db.once('open', () => {
  console.log('mongoDB connected!')
})

module.exports = db