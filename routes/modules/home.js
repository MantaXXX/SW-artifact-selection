const express = require('express')
const router = express.Router()
const SW = require('../../model/sw')

router.get('/', (req, res) => {
  SW.find()
    .sort({ attribute: 'desc', grade: 'desc', artifact_type: 'desc' })
    .lean()
    .then(data => res.render('index', { data }))
    .catch(error => { console.log(error) })
})

router.get('/:attribute', (req, res) => {
  const attribute = req.params.attribute
  SW.find({ attribute: attribute })
    .sort({ artifact_type: 'desc' })
    .lean()
    .then(data => res.render('index', { data }))
    .catch(error => console.log(error))
})


module.exports = router