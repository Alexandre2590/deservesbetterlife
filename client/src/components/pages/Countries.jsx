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

  useEffect(() => {
    api
      .getCountries()
      .then(countries => {
        setCountries(countries)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {/* <div className="Countries">
        <h2>List of countries</h2>
        {countries.map(c => (
          <li key={c._id}>{c.name}</li>
        ))}
      </div> */}
      <p> What's happen in the World </p>

      <select className="countryBox">
        <option value="-1">Sélectionner un pays</option>
        <option value="AUS">Australie</option>
        <option value="AUT">Autriche</option>
        <option value="BEL">Belgique</option>
        <option value="BRA">Brésil</option>
        <option value="CAN">Canada</option>
        <option value="CHL">Chili</option>
        <option value="COL">Colombie</option>
        <option value="CZE">République tchèque</option>
        <option value="DNK">Danemark</option>
        <option value="EST">Estonie</option>
        <option value="FIN">Finlande</option>
        <option value="FRA">France</option>
        <option value="DEU">Allemagne</option>
        <option value="GRC">Grèce</option>
        <option value="HUN">Hongrie</option>
        <option value="ISL">Islande</option>
        <option value="IRL">Irlande</option>
        <option value="ISR">Israël</option>
        <option value="ITA">Italie</option>
        <option value="JPN">Japon</option>
        <option value="KOR">Corée</option>
        <option value="LVA">Lettonie</option>
        <option value="LTU">Lituanie</option>
        <option value="LUX">Luxembourg</option>
        <option value="MEX">Mexique</option>
        <option value="NLD">Pays-Bas</option>
        <option value="NZL">Nouvelle-Zélande</option>
        <option value="NOR">Norvège</option>
        <option value="POL">Pologne</option>
        <option value="PRT">Portugal</option>
        <option value="RUS">Russie</option>
        <option value="SVK">République slovaque</option>
        <option value="SVN">Slovénie</option>
        <option value="ZAF">Afrique du Sud</option>
        <option value="ESP">Espagne</option>
        <option value="SWE">Suède</option>
        <option value="CHE">Suisse</option>
        <option value="TUR">Turquie</option>
        <option value="GBR">Royaume-Uni</option>
        <option value="USA">États-Unis</option>
      </select>
    </>
  )
}
