import React, { Component } from 'react'

class ActionTab extends Component {
  render () {
    console.log("action tab props", this.props);
    return (
      <div className = "actionTab">
          {this.props.actions.contact_id} - {this.props.actions.title} - DUE: <b>{this.props.actions.due_date}</b>
      </div>
    )
  }
}

export default ActionTab
