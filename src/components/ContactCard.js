import React, { Component } from 'react'
import { connect } from 'react-redux';
import FaTrash from 'react-icons/lib/fa/trash';
import { updateActions } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { deleteContacts } from '../actions/contacts';
import {Link} from 'react-router-dom'



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

  handleOnCompletedAction = (e) =>{
    console.log(e.target.id)
    this.props.updateActions(e.target.id)
  }

  handleDelete = (e) => {
    this.props.deleteContacts(e.target.id)
  }


  render () {
    let filteredMeetings = this.props.meetings.filter((item) => item.contact_id == this.props.contacts.id && item.user_id == 1)
    let personalMeetings = filteredMeetings.map((item)=> <li>{item.notes} | DATE: <b>{item.date}</b></li>)

    let filteredActions = this.props.actions.filter((item) => item.contact_id == this.props.contacts.id && item.user_id == 1)
    let personalActions = filteredActions.map((item)=> {
      console.log("UNICORNS: ", item)
      return (<li className={item.is_completed? 'linethrough': ''}>{item.title} | DUE: <b>{item.due_date}</b> <button id={`${item.id}`} onClick={this.handleOnCompletedAction}>Complete!</button></li>)
    })

    let filteredNotes = this.props.notes.filter((item) => item.contact_id == this.props.contacts.id && item.user_id == 1)
    let personalNotes= filteredNotes.map((item)=> <li>{item.description}</li>)

    return (
      <div>
      <div className = "contactCard">
        <div className = "contactCardHeader">
          <img className ="contactImage" src={this.props.contacts.photo_url} />
            <div className = "contactCardInfo">
              <h2 id = "contactName">{this.props.contacts.first_name} {this.props.contacts.last_name}</h2>
              <h4>{this.props.contacts.profession} at {this.props.contacts.company}</h4>
              <h5>Email | {this.props.contacts.email}</h5>
              <h5>Phone | {this.props.contacts.phone}</h5>
              <button type="button" data-toggle="modal" data-target="#exampleModal" className="deleteContactButton">Delete</button>
          </div>
          </div>
          <a onClick={this.toggleShowNotes}><div className = "note"> Notes About {this.props.contacts.first_name}</div></a>
          {this.state.showNotes? <ul className = "revealItems">{personalNotes}</ul> : null}

          <a onClick={this.toggleShowActions}><div className = "action"> Action Items</div></a>
          {this.state.showActions? <ul className = "revealItems">{personalActions}</ul> : null}

          <a onClick={this.toggleShowMeetings}><div className = "meeting"> Logged Meetings </div></a>
          {this.state.showMeetings? <ul className = "revealItems">{personalMeetings}</ul> : null}

      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Contact</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this contact?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button id={`${this.props.contacts.id}`} onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
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

function mapDispatchToProps(dispatch) {
  return {
    updateActions: bindActionCreators(updateActions, dispatch),
    deleteContacts: bindActionCreators(deleteContacts, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ContactCard)
