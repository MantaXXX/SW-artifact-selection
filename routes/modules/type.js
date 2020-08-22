const express = require('express')
const router = express.Router()
const SW = require('../../model/sw')

router.get('/:type', (req, res) => {
  const type = req.params.type
  SW.find({ type: type })
    .sort({ attribute: 'desc', grade: 'desc', artifact_type: 'desc' })
    .lean()
    .then(data => res.render('index', { data }))
    .catch(error => console.log(error))
})


module.exports = router

