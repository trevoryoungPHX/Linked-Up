import React, { Component } from 'react'
import ContactTab from "./ContactTab"
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class ContactGlance extends Component {
  render () {

    let contactList2 = this.props.contacts.map((item) => <ContactTab key={item.id} contacts = {item}/>)

    return (
      <div className = "contactGlance">
        <div className = "actionListHeader2">CONNECTIONS AT A GLANCE
        </div>
        {contactList2}
      </div>
    )
  }
}

function mapStateToProps(store, thisComponentsProps) {
  return {
    contacts: store.contacts
  }
}

export default connect (mapStateToProps, null) (ContactGlance)
