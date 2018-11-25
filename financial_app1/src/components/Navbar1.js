import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Navbar, NavbarNav, NavItem, NavLink, Collapse, Fa, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar1 from './Navbar1';


//import {NavBar, Nav, NavItem} from 'react-bootstrap';
//import './Navbar.css';

class Navbar1 extends Component {
    
    render() {
      
        return(
            <div>
                <Router>
                    <Navbar color="blue-grey" dark expand="lg" scrolling fixed="top">
                        <NavbarBrand href="/">
                            <strong>Creative Spark</strong>
                        </NavbarBrand>
                        {/* !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />*/}
                        <Collapse navbar>
                            <NavbarNav left>
                            <NavItem >
                                <Link className="nav-link" to="/companyhome">Home</Link>
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
                            {/* <NavItem>
                                <NavLink to="#"><Fa icon="facebook" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="twitter" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="instagram" /></NavLink>
                            </NavItem> */}
                            <NavItem >
                                <Link className="nav-link" to="/login">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Dropdown >
                                    <DropdownToggle nav caret> <div className="d-none d-md-inline">Dropdown</div></DropdownToggle>
                                    <DropdownMenu right>
                                    <DropdownItem href="yourprofile">Your Profile</DropdownItem>
                                    <DropdownItem href="editprofile">Edit Profile</DropdownItem>
                                    <DropdownItem href="#!">Security</DropdownItem>
                                    <DropdownItem href="/login">Log out</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
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
export default Navbar1;

