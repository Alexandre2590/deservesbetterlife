import React from 'react'
import api from '../api'
import logo from '../logo1.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <>
    <nav className="App-header1">
   <img src={logo} className="App-logo1" alt="logo" />
    <nav className="App-header1-2">
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
      
    </nav>
    </>
  )
}

export default withRouter(MainNavbar)
