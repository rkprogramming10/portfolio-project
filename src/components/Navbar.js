import React from 'react'
import logo from "../logo.png"

//Reqact FontAwesome Import//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="Home">
          <img className="logo" src={logo} alt="logo...."></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBarsProgress} style={{color:"#fff", borderRadius:"100px"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="Home">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About Us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Github Page">
                Github Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar