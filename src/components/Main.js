import React, { Component } from 'react'
import ContactList from './ContactList'
import UserCard from "./UserCard"
import ContactGlance from "./ContactGlance"
import { Container, Row, Col } from 'reactstrap';
import ActionList from "./ActionList"
import FaUser from 'react-icons/lib/fa/user';
import FaStickyNote from 'react-icons/lib/fa/sticky-note';
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o'
import FaBolt from "react-icons/lib/fa/bolt";

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
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddConnection} className="btn btn-secondary"> <FaUser /> | New Connection</button><br></br>
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddNote} class="btn btn-warning"><FaStickyNote /> | Add A Note</button>
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddAction} className="btn btn-success"><FaBolt /> | New Action Item</button><br></br>
                  <button type="button" id="dashboardButton" onClick={this.props.toggleAddMeeting} className="btn btn-info"><FaCalendarCheckO /> | Log Meeting</button><br></br>
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
