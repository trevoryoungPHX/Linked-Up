import React, { Component } from 'react'
import { postNotes } from '../actions/notes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FaStickyNote from 'react-icons/lib/fa/sticky-note';


class NewNote extends Component {

      state ={
        contact_id: '',
        description: '',
        user_id: 1
    }

    handleChange = (e) =>{
      if(e.target.id === 'contact_id'){
        this.setState({contact_id: e.target.value})
      }
      else {
        this.setState({description: e.target.value})
      }
    }

      handleAddNote = (e) => {
        this.props.postNotes(this.state)
    }

  render () {
    let filteredContactList = this.props.contacts.filter((item)=>item.user_id == 1);
    let contactList = filteredContactList.map((item) => <option value={item.id} key={item.id}>{item.first_name} {item.last_name}</option>);

    return (
      <div className = "newNote">
        <button type="button" onClick={this.props.toggleAddNote} id = "closeButton" className="btn btn-danger"><b>X</b></button>
        <form className="form-horizontal">
          <fieldset>
          <legend id = "newLegend"><FaStickyNote /> | NEW NOTE</legend>
          <div className="form-group">
            <label className="col-md-4 control-label" id="labelForm" for="contact_id">CONNECTION</label>
            <div className="col-md-8">
              <select id="contact_id" onChange={this.handleChange} name="contact_id" className="form-control">
                { contactList }
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label" id="labelForm" for="description">DESCRIPTION</label>
            <div className="col-md-8">
              <textarea className="form-control" onChange={this.handleChange} id="description" value={this.state.description} name="description"></textarea>
            </div>
          </div>
          <button type="button" id="newSubmitButton"  onClick={this.handleAddNote} className="btn btn-secondary">SUBMIT CONNECTION NOTE</button><br></br>
          </fieldset>
          </form>
          <div class="alert alert-dismissible alert-warning">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Note taken!</strong>
          </div>
      </div>
    )
  }
}

function mapStateToProps(store, thisComponentsProps) {
  return {
    contacts: store.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postNotes: bindActionCreators(postNotes, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
