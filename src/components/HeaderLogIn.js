import React, { Component } from 'react'
import logo from'../logodraft2.png';
import {Link} from 'react-router-dom'


class HeaderLogIn extends Component {
  render () {
    return (
      <div className = "marginFix">
      <nav id = "loginNav" className="navbar navbar-expand-lg navbar-dark bg-primary">
        <img height="80px" src={logo} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={`/about`}><p className = "headerText">About</p></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="email" placeholder="Email" />
            <input className="form-control mr-sm-2" type="password" placeholder="Password" />
            <Link to={'/home'}><button id = "signInButton" className="btn btn-secondary my-2 my-sm-0" type="submit">Sign-In!</button></Link>
          </form>
        </div>
      </nav>
      </div>
    )
  }
}

export default HeaderLogIn
