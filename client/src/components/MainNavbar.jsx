import React from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <>
    {/* <a className="App-logo" href="ton_lien.html"><img src={logo} alt="logo"/></a> */}
    <a href="./"> <img src={logo} className="App-logo" alt="logo" /></a>
    <nav className="App-header">
  
      <h1 className="App-title">DeservesBetterLife</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/countries">Countries</NavLink>
      <NavLink to="/add-country">Add job</NavLink>
      {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
      {api.isLoggedIn() && (
        <Link to="/" onClick={handleLogoutClick}>
          Logout
        </Link>
      )}
      <NavLink to="/secret">Secret</NavLink>
    </nav>
    </>
  )
}

export default withRouter(MainNavbar)
