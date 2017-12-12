import React, { Component } from 'react'
import ContactList from './ContactList'
import UserCard from "./UserCard"
import ContactGlance from "./ContactGlance"
import { Container, Row, Col } from 'reactstrap';
import ActionList from "./ActionList"


class Main extends Component {
  render () {
    return (
      <div className="bodyWidth">
        <div className='mainBody'>
          <Container>
            <Row>
              <Col md="8">
                <UserCard />
                <ContactList />
              </Col>
              <Col xs="4">
                <div className = "dashboard">
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddConnection} className="btn btn-secondary">New Connection</button><br></br>
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddNote} class="btn btn-warning">Add A Note</button>
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddAction} className="btn btn-success">New Action Item</button><br></br>
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddMeeting} className="btn btn-info">Log Meeting</button><br></br>
                </div>
                <ActionList />
                <ContactGlance />
              </Col>
            </Row>
          </Container>

        </div>
      </div>
    )
  }
}

export default Main
