const mongoose = require('mongoose')
const Schema = mongoose.Schema
const swSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  attribute: {
    type: String,
    required: true
  },
  artifact_type: {
    type: String,
    required: false
  },
  skill_1: {
    type: String,
    required: false
  },
  skill_2: {
    type: String,
    required: false
  },
  skill_3: {
    type: String,
    required: false
  },
  skill_4: {
    type: String,
    required: false
  },
  artifact_attribute: {
    type: String,
    required: false
  },
  artifact_other: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('SW', swSchema)