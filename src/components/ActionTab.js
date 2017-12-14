import React, { Component } from 'react'

class ActionTab extends Component {
  render () {
    console.log("action tab props", this.props);
    return (
      <div className = "actionTab">
        <b>{this.props.actions.contact_id}</b><br></br>
        {this.props.actions.title}<br></br>
        DUE: <b>{this.props.actions.due_date}</b>
        <div className = "line"></div>
      </div>
    )
  }
}

export default ActionTab
