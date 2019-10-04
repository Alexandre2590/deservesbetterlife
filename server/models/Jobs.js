const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  position: String,
  company: String,
  country: String,
  city: String,
  salary: String,
  jobDescription: String,
})

const Job = mongoose.model('Job', jobSchema)
module.exports = Job
