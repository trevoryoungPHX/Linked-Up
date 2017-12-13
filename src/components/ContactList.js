import React, { Component } from 'react'
import ContactCard from "./ContactCard"
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


class ContactList extends Component {
  render () {
    let filteredContactList = this.props.contacts.filter((item)=>item.user_id == 1);
    let contactList = filteredContactList.map((item) => <ContactCard key={item.id} contacts={item}/>);

    return (
      <div>
        <div>
          <div className = "contactSearch">
            <h1 className="connectionHeader">FIND A CONNECTION</h1>
            <form className="form-inline my-2 my-lg-0" id = "searchForm">
              <input className="form-control mr-sm-2" id = "searchInput" placeholder="SEARCH HERE..." type="text" /><br></br>
            </form>
            <div class="form-group">
              <label id="searchInput"for="exampleSelect1">SORT BY:</label>
              <select class="form-control" id="exampleSelect1">
                <option>FIRST NAME</option>
                <option>LAST NAME</option>
                <option>COMPANY NAME</option>
              </select>
            </div>
        </div>
        <div class = "contactList">
        <h1 className="connectionHeader2">YOUR CONNECTIONS</h1>
        {contactList}
        </div>
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

export default connect (mapStateToProps, null) (ContactList)
