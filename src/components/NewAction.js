import React, { Component } from 'react'
import { postActions } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FaBolt from "react-icons/lib/fa/bolt";


class NewAction extends Component {

  state ={
    contact_id: '',
    title: '',
    due_date: '',
    is_completed: false,
    user_id: 1
}

handleChange = (e) =>{
  if(e.target.id === 'contact_id'){
    this.setState({contact_id: e.target.value})
  }
  else if(e.target.id === 'title'){
    this.setState({title: e.target.value})
  }
  else if(e.target.id === 'due_date'){
    this.setState({due_date: e.target.value})
  }
  else {
    this.setState({is_completed: e.target.value})
  }
}

  handleAddAction = (e) => {
    this.props.postActions(this.state)
}

  render () {
    let filteredContactList = this.props.contacts.filter((item)=>item.user_id == 1);
    let contactList = filteredContactList.map((item) => <option value={item.id} key={item.id}>{item.first_name} {item.last_name}</option>);

    return (
      <div className = "newAction">
        <button type="button" id = "closeButton" onClick={this.props.toggleAddAction} class="btn btn-danger"><b>X</b></button>
        <form class="form-horizontal">
          <fieldset>
          <legend id = "newLegend"><FaBolt /> | NEW ACTION ITEM</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="contact_id">CONNECTION</label>
            <div class="col-md-8">
              <select id="contact_id" onChange={this.handleChange} name="contact_id" class="form-control">
                { contactList }
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="title">ACTION TITLE</label>
            <div class="col-md-8">
            <input id="title" name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="" class="form-control input-md" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="due_date">DUE DATE</label>
            <div class="col-md-8">
            <input id="due_date" name="due_date" onChange={this.handleChange} value={this.state.due_date} type="date" placeholder="MM/DD/YYYY" class="form-control input-md" required="" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="is_completed">COMPLETED</label>
            <div class="col-md-4">
              <label class="radio-inline" for="is_completed-0">
                <input type="radio" name="is_completed" onChange={this.handleChange} value={this.state.is_completed} id="is_completed-0" value="true" />
                TRUE
              </label>
              <label class="radio-inline" for="is_completed-1">
                <input type="radio" name="is_completed" onChange={this.handleChange} value={this.state.is_completed}  id="is_completed-1" checked="checked" value="false" />
                FALSE
              </label>
            </div>
          </div>
          <button type="button" id="newSubmitButton" onClick={this.handleAddAction}  className="btn btn-secondary">New Action Item</button><br></br>

          </fieldset>
          </form>

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
    postActions: bindActionCreators(postActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAction);
