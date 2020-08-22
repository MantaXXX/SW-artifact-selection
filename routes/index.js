const express = require('express')
const router = express.Router()


const home = require('./modules/home')
const type = require('./modules/type')

router.use('/', home)
router.use('/type', type)


module.exports = router