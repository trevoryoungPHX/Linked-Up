import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn';
import Index from './components/Index';
import About from "./components/About"
import { getContacts } from './actions/contacts';
import { getActions } from './actions/actions';
import { getMeetings } from './actions/meetings';
import { getNotes } from './actions/notes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.getContacts();
    this.props.getActions(1);
    this.props.getMeetings(1);
    this.props.getNotes(1);
  }

  render() {
    return (
    <Router>
      <Switch>
      <Route exact path="/home" component={Index}/>
      <Route path ="/about" component={About}/>
      </Switch>
    </Router>

    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getContacts: bindActionCreators(getContacts, dispatch),
    getActions: bindActionCreators(getActions, dispatch),
    getMeetings: bindActionCreators(getMeetings, dispatch),
    getNotes: bindActionCreators(getNotes, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
