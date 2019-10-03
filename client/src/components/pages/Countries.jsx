import React, { useEffect, useState } from 'react'
import api from '../../api'

const pays = {
  USA:
    'https://odis.homeaway.com/odis/destination/c4947c06-f0f9-4d37-b5c6-7966cba2b94f.hw5.jpg',
  FRA:
    'https://cdn.paris.fr/paris/2019/07/24/huge-550a23487012018a10eeed9bdfa561c8.jpeg',
}

export default function Countries() {
  const [countries, setCountries] = useState([])

  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    api
      .getCountries()
      .then(countries => {
        console.log(countries)
        setCountries(countries)
      })
      .catch(err => console.log(err))
  }, [])
  const handleChange = e => {
    setSelectedCountry(e.target.value)
  }

  return (
    <>
      <h2> What's happen in the World </h2>

      <select onChange={handleChange} className="countryBox">
        <option value="-1">Select a country</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Belgium">Belgium</option>
        <option value="Brazil">Brazil</option>
        <option value="Canada">Canada</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Czech Republic">Czech Republic </option>
        <option value="Denmark">Denmark</option>
        <option value="Estonia">Estonia</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
        <option value="Greece">Greece</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="Ireland">Ireland</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Japan">Japan</option>
        <option value="Korea">Korea</option>
        <option value="Latvia">Latvia</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Mexico">Mexico </option>
        <option value="Netherlands">Netherlands</option>
        <option value="New Zealand">New Zealand </option>
        <option value="Norway">Norway</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Russia">Russia</option>
        <option value="SVK">République slovaque</option>
        <option value="Slovenia">Slovenia</option>
        <option value="South Africa">South Africa</option>
        <option value="Spain">Spain</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Turkey">Turkey</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
      </select>

      {!selectedCountry && (
        <ul>
          {countries.map((c, i) => (
            <li key={i}>
              <h2>{c.NameCountry}</h2>
              <div>
                <img src={c.Img} alt="" />{' '}
              </div>
            </li>
          ))}
        </ul>
      )}

      <ul>
        {countries
          .filter(c => c.NameCountry === selectedCountry)
          .map((c, i) => (
            <li key={i}>
              <h1>{c.NameCountry}</h1>
              <p>
                Dwellings without basic facilities
                {c.Dwellings_without_basic_facilities}
              </p>
              <p>Housing expenditure : {c.Housing_expenditure} %</p>
              <p>Rooms per person : {c.Rooms_per_person} rate</p>
              <p>
                Household net adjusted_disposable_income :{' '}
                {c.Household_net_adjusted_disposable_income} $
              </p>
              <p>Household net wealth : {c.Household_net_wealth} $</p>
              <p>Labour market insecurity : {c.Labour_market_insecurity} %</p>
              <p>Employment rate : {c.Employment_rate} %</p>
              <p>Personal earnings : {c.Personal_earnings} $</p>
              <p>
                Quality of support network : {c.Quality_of_support_network} %
              </p>
              <p>Educational attainment : {c.Educational_attainment} %</p>
              <p>Student skills : {c.Student_skills} Average score</p>
              <p>Years in education : {c.Years_in_education} Years</p>
              <p>
                Air pollution : {c.Air_pollution} Micrograms per cubic metre
              </p>
              <p>Water quality : {c.Water_quality} %</p>
              <p>
                Stakeholder engagement_for_developing_regulations :{' '}
                {c.Stakeholder_engagement_for_developing_regulations} average
                score
              </p>
              <p>Voter turnout : {c.Voter_turnout} %</p>
              <p>Life expectancy : {c.Life_expectancy} Years</p>
              <p>Self reported health : {c.Self_reported_health} %</p>
              <p>Life satisfaction : {c.Life_satisfaction} average score</p>
              <p>
                Feeling safe walking_alone_at_night :{' '}
                {c.Feeling_safe_walking_alone_at_night} %
              </p>
              <p>Homicide rate : {c.Homicide_rate} rate</p>
              <p>
                Employees working very long hours :{' '}
                {c.Employees_working_very_long_hours} %
              </p>
              <p>
                Time devoted to leisure and personal care :{' '}
                {c.Time_devoted_to_leisure_and_personal_care} Hours
              </p>
            </li>
          ))}
      </ul>
    </>
  )
}
