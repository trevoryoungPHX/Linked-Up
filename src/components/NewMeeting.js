import React, { Component } from 'react'
import { postMeetings } from '../actions/meetings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NewMeeting extends Component {


    state ={
      contact_id: '',
      date: '',
      type: '',
      notes: '',
      user_id: 1
  }

  handleChange = (e) =>{
    if(e.target.id === 'contact_id'){
      this.setState({contact_id: e.target.value})
    }
    else if(e.target.id === 'date'){
      this.setState({date: e.target.value})
    }
    else if(e.target.id === 'type'){
      this.setState({type: e.target.value})
    }
    else {
      this.setState({notes: e.target.value})
    }
  }

    handleAddMeeting = (e) => {
      this.props.postMeetings(this.state)
  }


  render () {
    let filteredContactList = this.props.contacts.filter((item)=>item.user_id == 1);
    let contactList = filteredContactList.map((item) => <option value={item.id} key={item.id}>{item.first_name} {item.last_name}</option>);

    return (
      <div className = "newMeeting">
        <button type="button" id = "closeButton" onClick={this.props.toggleAddMeeting} class="btn btn-danger"><b>X</b></button>
        <form class="form-horizontal">
          <fieldset>
          <legend id = "newLegend">NEW MEETING LOG</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="contact_id">CONNECTION</label>
            <div class="col-md-8">
              <select id="contact_id" onChange={this.handleChange} name="contact_id" class="form-control">
                { contactList }
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="date">MEETING DATE</label>
            <div class="col-md-8">
            <input id="date" name="date" onChange={this.handleChange} type="date" value={this.state.date} placeholder="" class="form-control input-md" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="type">MEETING TYPE</label>
            <div class="col-md-8">
            <input id="type" name="type" onChange={this.handleChange} type="text" value={this.state.type} placeholder="" class="form-control input-md" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="notes">NOTES</label>
            <div class="col-md-8">
              <textarea class="form-control" id="notes" name="notes"onChange={this.handleChange}  value={this.state.notes}></textarea>
            </div>
          </div>
          <button type="button" id="newSubmitButton"  onClick={this.handleAddMeeting} className="btn btn-secondary">LOG MEETING</button>
          </fieldset>
          </form>
      </div>
    );
  }
}

function mapStateToProps(store, thisComponentsProps) {
  return {
    contacts: store.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postMeetings: bindActionCreators(postMeetings, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMeeting);
