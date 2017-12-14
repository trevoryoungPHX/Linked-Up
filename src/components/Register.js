import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Register extends Component {
  render () {
    return (
      <div className = "registerBackground">
      <div className = "register">
        <div className = "registerHeader">
          <p>Sign Up Today!</p>
        </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="First Name"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Photo URL"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1"  placeholder="Password"/>
          </div>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small><br></br>
          <Link to={'/about'}><button type="button" className="btn btn-primary">Get Started</button></Link>
        </form>
      </div>
    </div>
    )
  }
}

export default Register
