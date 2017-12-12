import React, { Component } from 'react'

class Register extends Component {
  render () {
    return (
      <div className = "registerBackground">
      <div className = "register">
        <div className = "registerHeader">
          <p>Sign Up Today - It's Free!</p>
        </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" value="first_name" placeholder="First Name"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" value="last_name" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputEmail1" value="photo_url" placeholder="Photo URL"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" value="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" value="password" placeholder="Password"/>
          </div>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small><br></br>
          <button type="button" className="btn btn-primary">Get Started</button>
        </form>
      </div>
    </div>
    )
  }
}

export default Register
