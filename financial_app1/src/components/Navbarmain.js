import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Navbar, NavbarNav, NavItem, NavLink, Collapse, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


//import {NavBar, Nav, NavItem} from 'react-bootstrap';
//import './Navbar.css';

class Navbarmain extends Component {
    
    render() {
      
        return(
            <div>
                <Router>
                    <Navbar color="blue-grey darken-4" dark expand="lg" scrolling fixed="top">
                        {/* <NavbarBrand href="/">
                            <strong>Navbar</strong>
                        </NavbarBrand> */}
                        {/* !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />*/}
                        <Collapse navbar>
                            <NavbarNav left>
                            <NavItem >
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="#">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="bell" /></NavLink>
                            </NavItem>
                            </NavbarNav>

                            <NavbarNav right>
                            <NavItem>
                                <NavLink className="nav-link" to="#">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="facebook" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="twitter" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="instagram" /></NavLink>
                            </NavItem>
                            <NavItem active>
                                <Link className="nav-link" to="/login">Login</Link>
                            </NavItem>
                            </NavbarNav>

                        </Collapse>
                    </Navbar>
                </Router>
                <br/>
                <br/>
                <br/>
            </div>
        

        )
      }
}
export default Navbarmain;

