import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import CompanyReg from './component/register';
import UserLog from './component/login';
import Home from './component/home';
import Profile from './component/profile';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div>
          <Router>
            <div>
              <div>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/company/register" component = {CompanyReg} />
                <Route exact path = "/user/login" component = {UserLog} />
                <Route exact path = "/profile" component = {Profile} />
              </div>
              <br/><br/>

            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
