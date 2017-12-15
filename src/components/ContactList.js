import React, { Component } from 'react'
import ContactCard from "./ContactCard"
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FaSearch from 'react-icons/lib/fa/search';
import FaUser from 'react-icons/lib/fa/user';

class ContactList extends Component {

  state={
  filterName: '',
  sortBy: 'first_name'
}

handleChange = (e) => {
this.setState({filterName: e.target.value})
}

handleSortChange = (e) => {
e.preventDefault();
this.setState({sortBy: e.target.value})
}

  render () {
    let filteredContactList = this.props.contacts.filter((item)=>item.user_id == 1);
    let sortedContactList = this.state.sortBy == 'first_name'? filteredContactList.sort((a,b)=> a.first_name.toUpperCase() < b.first_name.toUpperCase()? -1 : 1) : filteredContactList.sort((a,b)=> a.last_name.toUpperCase() < b.last_name.toUpperCase()? -1 : 1);
    let searchContactList = this.state.filterName == ''? sortedContactList : sortedContactList.filter((item)=> item.first_name.includes(this.state.filterName));
    let contactList = searchContactList.map((item) => <ContactCard key={item.id} contacts={item}/>);

    return (
      <div>
        <div>
          <div className = "contactSearch">
            <h1 className="connectionHeader"><FaSearch /> | FIND A CONNECTION</h1>
            <form className="form-inline my-2 my-lg-0" id = "searchForm">
              <input onChange={this.handleChange} className="form-control mr-sm-2" id = "searchInput" placeholder="Search Here..." type="text" /><br></br>
            </form>
            <div className="form-group">
              <label id="searchInput" htmlFor="exampleSelect1">SORT BY:</label>
              <select onChange={this.handleSortChange} className="form-control" id = "centeredOption">
                <option value='first_name'>First Name</option>
                <option value='last_name'>Last Name</option>
              </select>
            </div>
        </div>
        <div className = "contactList">
        <h1 className="connectionHeader2"><FaUser /> | YOUR CONNECTIONS</h1>
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
