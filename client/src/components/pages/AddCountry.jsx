import React, { useState } from 'react'
import api from '../../api'

export default function AddCountry(props) {
  const [state, setState] = useState({
    company: '',
    position: '',
    country:'',
    city: '',
    salary: '',
    jobDescription: '',
  })
  const [message, setMessage] = useState(null)

  console.log(state)

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(state.company, state.jobDescription)
    let data = {
      company: state.company,
      position: state.position,
      country: state.country,
      city: state.city,
      salary: state.salary,
      jobDescription: state.jobDescription,
    }
    api
      .addJob(data)
      .then(result => {
        console.log('SUCCESS!')
        setState({
          company: '',
          position: '',
          country:'',
          city: '',
          salary: '',
          jobDescription: '',
        })
        setMessage(`Your job'${state.company}' has been created`)
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="AddCountry">
      <h2>Add job</h2>
      <form>
        Company:{' '}
        <input
          type="text"
          value={state.company}
          name="company"
          onChange={handleInputChange}
        />{' '}
        <br />
        Position:{' '}
        <input
          type="text"
          value={state.position}
          name="position"
          onChange={handleInputChange}
        />{' '}
        <br /> Country:{' '}
        <input
          type="text"
          value={state.country}
          name="country"
          onChange={handleInputChange}
        />{' '}
        <br />
        City:{' '}
        <input
          type="text"
          value={state.city}
          name="city"
          onChange={handleInputChange}
        />{' '}
        <br />
        Salary:{' '}
        <input
          type="number"
          value={state.salary}
          name="salary"
          onChange={handleInputChange}
        />
        <br />
        Job description:{' '}
        <textarea
          value={state.jobDescription}
          name="jobDescription"
          cols="30"
          rows="10"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button onClick={e => handleClick(e)}>Create Job</button>
      </form>
      {message && <div className="info">{message}</div>}
    </div>
  )
}
