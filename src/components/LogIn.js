import React, { Component } from 'react'
import HeaderLogIn from "./HeaderLogIn"
import Register from "./Register"
import LogInFooter from "./LogInFooter"

class LogIn extends Component {
  render () {
    return (
      <div>
        <HeaderLogIn />
        <Register />
        <LogInFooter />
      </div>
    )
  }
}

export default LogIn
