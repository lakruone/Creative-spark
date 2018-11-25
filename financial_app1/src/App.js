import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Login from './components/Login';
import Signup from './components/Signup';
//import Navbar from './components/Navbar';
import Navbarmain from './components/Navbarmain';
//import Navbar1 from './components/Navbar1';
import Home from './components/Home';
import Companyhome from './components/Companyhome';
import Companyregister from './components/Companyregister';
import Fogotpassword from './components/Fogotpassword';
import Fogotpassword1 from './components/Fogotpassword1';
import Footerpage from './components/Footerpage';
import Yourprofile from './components/Yourprofile';
import Editprofile from './components/Editprofile';
//import SideNavPage from './components/SideNavPage';

//import {CenterView} from 'react-bootstrap';
//import img from "./img1.jpg";
import './App.css';


//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    //var sectionStyle = {
     // backgroundImage: "url(" +  img  + ")" 
    //};
    
    return (
    
//        <div class="logo" style={ sectionStyle }>
    
//     <div className="App">
  
//   <div className="login">
//    <h1>Login</h1>
//    <Login />
//   </div>
//   <div className="sign">
//    <h1>Sign Up</h1>
//    <Signup />
//  </div>

//  </div>
//    </div> 
  
    <div className="App">
        <div>
          <Router>  
            <div>
              {/* <Navbarmain />  */}
                  <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/signup" component={ Signup } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/fogotpassword" component={ Fogotpassword } />
                  <Route exact path="/fogotpassword1" component={ Fogotpassword1 } />
                  <Route exact path="/companyregister" component={ Companyregister } />
                  {/* <Route exact path="/navbar1" component={ Navbar1 } /> */}
                  <Route exact path="/companyhome" component={ Companyhome } />
                  <Route exact path="/yourprofile" component={ Yourprofile } />
                  <Route exact path="/editprofile" component={ Editprofile } />
              
                  {/*<Route exact path="/Footer" component={ Footer } />*/}
                </div>
                <br/><br/>
                <Footerpage/>
            </div>
          </Router>
        </div>
        {/*<div>
          <Router>
            <div>
            <Navbar1 />
                    <Route exact path="/companyhome" component={ Companyhome } />
            
            </div>
          </Router> 
        </div>*/}
    </div>

    
      
    );
  }
}

export default App;
