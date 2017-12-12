import React, { Component } from 'react'
import ActionTab from "./ActionTab"

class ActionList extends Component {
  render () {
    return (
      <div className = "actionList">
        <div className = "actionListHeader">UPCOMING ACTIONS
        </div>
        <ActionTab />
      </div>
    )
  }
}

export default ActionList
