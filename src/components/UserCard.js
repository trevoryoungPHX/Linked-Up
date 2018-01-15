import React, { Component } from 'react'

class UserCard extends Component {
  render () {
    return (
        <div>
      <div className = "userCard">
        <img className="userImage" src="http://a.fod4.com/images/user_photos/1203812/357a79e5befe5adefeb1d12050ed95fc_square_fullsize.png"/>
      </div>
      <div className = "whitebackground">
          <h1 class="headerShadow">MICHAEL SCOTT</h1>
          <h5>Member Since: December, 2017 </h5>
        </div>
      </div>

    )
  }
}

export default UserCard
