import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className = "headerLogIn">
        <div className = "marginFix">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="mainNav">
          <a className="navbar-brand" id = "navLogo" href="#">Linked Up</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={`/home`}><button class = "btn btn-secondary">BACK TO HOMEPAGE</button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
    )
  }
}

export default Header
