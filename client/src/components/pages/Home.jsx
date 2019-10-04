import React, { useEffect, useState } from 'react'
import api from '../../api'

export default function Home() {
  const [job, setJob] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    console.log('component started')

    api
      .getJobs()
      .then(jobs => {
        console.log(jobs)
        setJob(jobs)
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSelectedJob(e.target.value)
  }

  return (
    <>
      <div className="Home">
        <h2>What's your job ?</h2>
        <p>Your skills may be more valuable elsewhere ...</p>
        <br />

        <div className="wrap">
          <div className="search">
            {/* <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
            /> */}

            <input
              onChange={handleChange}
              className="searchTerm"
              list="jobs"
              type="text"
              id="choix_bieres"
              placeholder="What is your job?"
            />

            <datalist className="jobs" id="jobs">
              <option value="Web developer" />
              <option value="Accounting" />
              <option value="Cops" />
              <option value="IronHacker" />
            </datalist>

            <button type="submit" className="searchButton" id="autocomplete">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        {selectedJob && (
          <ul>
            {job.map((c, i) => (
              <li key={i}></li>
            ))}
          </ul>
        )}
<ul>
        {job
          .filter(c => c.position === selectedJob)
          .map((c, i) => (
            <li key={i}>
              <h1>{c.position}</h1>
              <h2>{c.city}</h2>
              <h2>{c.salary}$</h2>
              <h2>{c.company}</h2>
              <h3>{c.jobDescription}</h3>
         
            </li>
          ))}
      </ul>

      </div>
    </>
  )
}
