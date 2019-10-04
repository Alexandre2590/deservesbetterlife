const express = require('express')
const Jobs = require('../models/Jobs')

const router = express.Router()

// Route to get all countries
router.get('/', (req, res, next) => {
  Jobs.find()
    .then(jobs => {
      res.json(jobs)
    })
    .catch(err => next(err))
})

// Route to add a Jobs
router.post('/', (req, res, next) => {
  let { position, company, city, salary, jobDescription } = req.body
  console.log(req.body)

  Jobs.create({ position, company, city, salary, jobDescription })
    .then(Jobs => {
      res.json({
        success: true,
        Jobs,
      })
    })
    .catch(err => next(err))
})

module.exports = router
