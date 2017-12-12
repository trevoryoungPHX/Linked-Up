import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn';
import Index from './components/Index';
import About from "./components/About"
import {getContacts} from './actions/contacts';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.getContacts()
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
    getContacts: bindActionCreators(getContacts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
