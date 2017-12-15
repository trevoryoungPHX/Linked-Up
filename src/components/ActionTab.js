import React, { Component } from 'react'

class ActionTab extends Component {
  render () {
    console.log("action tab props", this.props);
    return (
      <div className = "actionTab">
        <b>{this.props.actions.first_name} {this.props.actions.last_name}</b><br></br>
        - <i>{this.props.actions.title}</i> -<br></br>
        DUE: <b>{this.props.actions.due_date}</b>
        <div className = "line"></div>
      </div>
    )
  }
}

export default ActionTab
