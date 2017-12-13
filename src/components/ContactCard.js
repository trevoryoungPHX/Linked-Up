import React, { Component } from 'react'

import { connect } from 'react-redux';

class ContactCard extends Component {
  render () {
    let filteredMeetings = this.props.meetings.filter((item) => item.contact_id == this.props.contacts.id && item.user_id == 1)
    let personalMeetings = filteredMeetings.map((item)=> <li>{item.notes} | DATE: <b>{item.date}</b></li>)

    let filteredActions = this.props.actions.filter((item) => item.contact_id == this.props.contacts.id && item.user_id == 1)
    let personalActions = filteredActions.map((item)=> <li>{item.title} | DUE: <b>{item.due_date}</b></li>)

    let filteredNotes = this.props.notes.filter((item) => item.contact_id == this.props.contacts.id && item.user_id == 1)
    let personalNotes= filteredNotes.map((item)=> <li>{item.description}</li>)

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
            Notes About {this.props.contacts.first_name}
          </div>
          <ul>
            {personalNotes}
          </ul>
          <div className = "action">
            Action Items
          </div>
          <ul>
            {personalActions}
          </ul>
          <div className = "meeting">
            Logged Meetings
          </div>
          <ul>
            {personalMeetings}
          </ul>
      </div>
    )
  }
}

function mapStateToProps(store, thisComponentsProps) {
  return {
    meetings: store.meetings,
    notes: store.notes,
    actions: store.actions
  }
}

export default connect (mapStateToProps, null) (ContactCard)
