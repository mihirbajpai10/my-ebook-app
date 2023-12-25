import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useAppContext from '../AppContext';

const Navbar = () => {
  const { loggedIn, setLoggedIn} = useAppContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('user');
    setCurrentUser(null);
    navigate('/login');
    setLoggedIn(false);
  }


  const displayLoginOptions = () => {
    if (loggedIn) {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addebook">
            Add Ebook
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contactus">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/books">
            Books
          </NavLink>
        </li>
        <li className="nav-item">
          <button className='btn btn-danger' onClick={logout}>Logout</button>
        </li>
      </>
    } else {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>

      </>
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <a className="navbar-brand" style={{ fontWeight: 'bold', color: 'red' }} href="/">
          BookHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {displayLoginOptions()}

            {/* <li className="nav-item dropdown">
              <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >
              Dropdown
              </a>
              <ul className="dropdown-menu">
              
              <li>
              <a className="dropdown-item" href="#">
              Another action
              </a>
              </li>
              <li>
              <hr className="dropdown-divider" />
              </li>
              <li>
              <a className="dropdown-item" href="#">
              Something else here
              </a>
              </li>
              </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
              Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar