import React, { Component } from 'react'
import Action from "./Action"
import Note from "./Note"
import Meeting from "./Meeting"

class ContactCard extends Component {
  render () {
    console.log("contact card props", this.props);
    return (
      <div className = "contactCard">
        <div class = "contactCardHeader">
          <img class ="contactImage" src={this.props.contacts.photo_url} />
          <h2 id = "contactName">{this.props.contacts.first_name} {this.props.contacts.last_name}</h2>
          <h4>{this.props.contacts.profession} at {this.props.contacts.company}</h4>
          <h5>Email | {this.props.contacts.email}</h5>
        <h5>Phone | {this.props.contacts.phone}</h5>
        </div>
        <br></br>
          <div className = "note">
            NOTES
          </div>
        <Note />
          <div className = "action">
            ACTION ITEMS
          </div>
        <Action />
          <div className = "meeting">
            MEETING HISTORY
          </div>
        <Meeting />
      </div>
    )
  }
}

export default ContactCard
