import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from "./store"
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';


const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}><App /></Provider>, document.getElementById('root'));
