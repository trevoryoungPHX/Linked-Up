import React, { Component } from 'react'

class HeaderLogIn extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" id = "navLogo" href="#">Linked Up</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="email" placeholder="Email" />
            <input className="form-control mr-sm-2" type="password" placeholder="Password" />
            <button id = "signInButton" className="btn btn-secondary my-2 my-sm-0" type="submit">Sign-In!</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default HeaderLogIn
