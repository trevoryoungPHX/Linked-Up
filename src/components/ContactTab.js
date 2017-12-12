import React, { Component } from 'react'

class ContactTab extends Component {
  render () {
    return (
      <div className = "contactTab">
          {this.props.contacts.first_name} {this.props.contacts.last_name}
      </div>
    )
  }
}

export default ContactTab
