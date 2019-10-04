const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
require('../configs/database')

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')

const Country = require('../models/Country')

const Job = require('../models/Jobs')

const bcryptSalt = 10

var countries = require('../models/countrieslife')

// countries = JSON.parse(countries)
// console.log(countries)
Country.deleteMany()
  .then(() => {
    return Country.create(countries)
  })
  .then(countries => {
    console.log(`${countries.length} users created with the following id:`)
    console.log(countries.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
/*
  Job.deleteMany()
  .then(() => {
    return Jobs.create(jobs)
  })
  .then(jobs => {
    console.log(`${jobs.length} Jobs created with the following id:`)
    console.log(jobs.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
*/
