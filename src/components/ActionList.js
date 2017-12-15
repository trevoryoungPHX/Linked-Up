import React, { Component } from 'react'
import ActionTab from "./ActionTab"
import { connect } from 'react-redux';


class ActionList extends Component {
  render () {
    let actionList = this.props.actions.map((item) => item.is_completed? '' : <ActionTab key={item.id} actions = {item}/>)
    return (
      <div className = "actionList">
        <div className = "actionListHeader">UPCOMING ACTIONS
        </div>
        { actionList }
      </div>
    )
  }
}

function mapStateToProps(store, thisComponentsProps) {
  return {
    actions: store.actions
  }
}

export default connect (mapStateToProps, null) (ActionList)
