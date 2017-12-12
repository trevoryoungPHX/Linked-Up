import React, { Component } from 'react'
import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import NewConnection from "./NewConnection"
import NewAction from "./NewAction"
import NewMeeting from "./NewMeeting"
import NewNote from "./NewNote"

class Index extends Component {

  state= {
    showNewConnection: false,
    showNewAction: false,
    showNewMeeting: false,
    showNewNote: false
  }

toggleAddConnection = () => {
  this.setState({ showNewConnection: !this.state.showNewConnection})
}

toggleAddAction = () => {
  this.setState({ showNewAction: !this.state.showNewAction})
}

toggleAddMeeting= () => {
  this.setState({ showNewMeeting: !this.state.showNewMeeting})
}

toggleAddNote= () => {
  this.setState({ showNewNote: !this.state.showNewNote})
}

  render () {
    return (
      <div className = "mainBackground">
        <Header />
          {this.state.showNewConnection? <NewConnection
                      toggleAddConnection={this.toggleAddConnection}
                      showNewConnection={this.state.showNewConnection}
                      /> : null}
          {this.state.showNewNote? <NewNote
                      toggleAddNote={this.toggleAddNote}
                      showNewNote={this.state.showNewNote}
                      /> : null}
          {this.state.showNewAction? <NewAction
                      toggleAddAction={this.toggleAddAction}
                      showNewAction={this.state.showNewAction}
                      /> : null}
          {this.state.showNewMeeting? <NewMeeting
                      toggleAddMeeting={this.toggleAddMeeting}
                      showNewMeeting={this.state.showNewMeeting}
                      /> : null}
        <Main
            toggleAddConnection={this.toggleAddConnection}
            showNewConnection={this.state.showNewConnection}
            toggleAddNote={this.toggleAddNote}
            showNewNote={this.state.showNewNote}
            toggleAddAction={this.toggleAddAction}
            showNewAction={this.state.showNewAction}
            toggleAddMeeting={this.toggleAddMeeting}
            showNewMeeting={this.state.showNewMeeting}

          />
        <Footer />
      </div>
    )
  }
}

export default Index
