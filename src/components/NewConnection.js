import React, { Component } from 'react'
import { postContacts } from '../actions/contacts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FaUser from 'react-icons/lib/fa/user';


class NewConnection extends Component {

  state ={
    first_name: '',
    last_name: '',
    company: '',
    profession: '',
    phone: '',
    email: '',
    photo_url: '',
    user_id: 1
}

handleChange = (e) =>{
  if(e.target.id === 'first_name'){
    this.setState({first_name: e.target.value})
  }
  else if(e.target.id === 'last_name'){
    this.setState({last_name: e.target.value})
  }
  else if(e.target.id === 'company'){
    this.setState({company: e.target.value})
  }
  else if(e.target.id === 'profession'){
    this.setState({profession: e.target.value})
  }
  else if(e.target.id === 'email'){
    this.setState({email: e.target.value})
  }
  else if(e.target.id === 'phone'){
    this.setState({phone: e.target.value})
  }
  else {
    this.setState({photo_url: e.target.value})
  }
}

  handleAddContact = (e) => {
    this.props.postContacts(this.state)
}

  render () {
    return (
      <div className = "newConnection">
        <button type="button" id = "closeButton" onClick={this.props.toggleAddConnection} className="btn btn-danger"><b>X</b></button>
        <div className = "center">
        <form className="form-horizontal">
          <fieldset>
            <legend id = "newLegend"><FaUser /> | NEW CONNECTION</legend>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" for="first_name">FIRST NAME</label>
              <div className="col-md-8">
              <input id="first_name" name="first_name" onChange={this.handleChange} value={this.state.first_name} type="text" placeholder="" className="form-control input-md" required/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" id="labelForm" for="last_name">LAST NAME</label>
              <div className="col-md-8">
              <input id="last_name" name="last_name" onChange={this.handleChange} value={this.state.last_name} type="text" placeholder="" className="form-control input-md" required/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" for="company">COMPANY NAME</label>
              <div className="col-md-8">
              <input id="company" name="company" onChange={this.handleChange} value={this.state.company} type="text" placeholder="" className="form-control input-md" required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" for="profession">PROFESSION</label>
              <div className="col-md-8">
              <input id="profession" name="profession" onChange={this.handleChange} value={this.state.profession} type="text" placeholder="" className="form-control input-md" required/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" for="phone">PHONE NUMBER</label>
              <div className="col-md-8">
              <input id="phone" name="phone" onChange={this.handleChange} value={this.state.phone} type="text" placeholder="" className="form-control input-md" required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" for="email">EMAIL ADDRESS</label>
              <div className="col-md-8">
              <input id="email" name="email" onChange={this.handleChange} type="email" value={this.state.email} placeholder="" className="form-control input-md" required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" id="labelForm" for="photo_url">PHOTO URL</label>
              <div className="col-md-8">
              <input id="photo_url" name="photo_url" onChange={this.handleChange} value={this.state.photo_url} type="text" placeholder="" className="form-control input-md" required />
              </div>
            </div>
            <button type="button" id="newSubmitButton" onClick={this.handleAddContact} className="btn btn-secondary">Add Connection</button><br></br>
          </fieldset>
        </form>
    </div>
    <div class="alert alert-dismissible alert-info">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Well done! You have a new contact in your connections list.</strong>
    </div>
  </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postContacts: bindActionCreators(postContacts, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(NewConnection);
