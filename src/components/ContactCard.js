import React, { Component } from 'react'
import { connect } from 'react-redux';
import FaTrash from 'react-icons/lib/fa/trash';


class ContactCard extends Component {

  state= {
    showNotes: false,
    showActions: false,
    showMeetings: false
  }

  toggleShowNotes = () => {
    this.setState({ showNotes: !this.state.showNotes})
  }

  toggleShowActions = () => {
    this.setState({ showActions: !this.state.showActions})
  }

  toggleShowMeetings = () => {
    this.setState({ showMeetings: !this.state.showMeetings})
  }


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
        <button class="editContactButton">Edit</button>
        <button class="deleteContactButton"><FaTrash /></button>
        </div>
                  <a onClick={this.toggleShowNotes}><div className = "note"> Notes About {this.props.contacts.first_name}</div></a>
          {this.state.showNotes? <ul class = "revealItems">{personalNotes}</ul> : null}

          <a onClick={this.toggleShowActions}><div className = "action"> Action Items</div></a>
          {this.state.showActions? <ul class = "revealItems">{personalActions}</ul> : null}

          <a onClick={this.toggleShowMeetings}><div className = "meeting"> Logged Meetings </div></a>
          {this.state.showMeetings? <ul class = "revealItems">{personalMeetings}</ul> : null}

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
