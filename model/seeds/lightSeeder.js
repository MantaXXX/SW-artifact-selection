const db = require('../../config/mongoose')
const SW = require('../sw')
const swLight = require('../../swLight.json').results

db.once('open', () => {
  swLight.forEach(data => {
    SW.create({
      name: `${data.name}`,
      img: `${data.img}`,
      grade: `${data.grade}`,
      type: `${data.type}`,
      attribute: `${data.attribute}`,
      artifact_type: `${data.artifact_type}`,
      skill_1: `${data.skill_1}`,
      skill_2: `${data.skill_2}`,
      skill_3: `${data.skill_3}`,
      skill_4: `${data.skill_4}`,
      artifact_attribute: `${data.artifact_attribute}`,
      artifact_other: `${data.artifact_other}`,
    })
  })
  console.log('Done!')
})

