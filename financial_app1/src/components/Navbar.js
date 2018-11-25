import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//import {NavBar, Nav, NavItem} from 'react-bootstrap';
//import './Navbar.css';

class Navbar extends Component {
    
    render() {
      
        return(
          <nav className="navbar navbar-expand-sm md-3 " style={{backgroundColor: "#CFE8F1"}} >
            <NavbarBrand href="#">
                <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" className="d-inline-block align-top"/>
                Bootstrap
            </NavbarBrand>
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                       {/* <li className="nav-item">
                            <Link className="nav-link" to="/signup"><button className="btn btn-primary">Sign Up</button></Link>
                        </li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><button className="btn btn-primary">Login</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><button className="btn btn-primary">Home</button></Link>
                        </li>
                    </ul>
              </div>
            </nav>

        

        )
      }
}
export default Navbar;

