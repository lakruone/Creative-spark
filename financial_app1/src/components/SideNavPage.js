import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarNav, sideStyle, isOpenWithButtonA, navStyle, NavItem, button1, specialCaseNavbarStyles, NavLink, Dropdown, mainStyle, DropdownToggle, DropdownMenu, DropdownItem, Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, Container } from 'mdbreact';

class SideNavPage extends React.Component  {
render() {
    return (
        <Router>
          <div className="mt-5">
            <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"  breakWidth={1300} style={sideStyle} hidden>
              <li>
                <ul className="social">
                  <li><a href="#!"><Fa icon="facebook"></Fa></a></li>
                  <li><a href="#!"><Fa icon="pinterest"></Fa></a></li>
                  <li><a href="#!"><Fa icon="google-plus"></Fa></a></li>
                  <li><a href="#!"><Fa icon="twitter"></Fa></a></li>
                </ul>
              </li>
              <SideNavNav>
                <SideNavCat name="Submit blog" icon="chevron-right">
                    <SideNavItem>Submit listing</SideNavItem>
                    <SideNavItem>Registration form</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Instruction" icon="hand-pointer-o">
                  <SideNavItem>For bloggers</SideNavItem>
                  <SideNavItem>For authors</SideNavItem>
                </SideNavCat>
                <SideNavCat name="About"  icon="eye">
                  <SideNavItem>Instruction</SideNavItem>
                  <SideNavItem>Monthly meetings</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Contact me" icon="envelope-o">
                  <SideNavItem>FAQ</SideNavItem>
                  <SideNavItem>Write a message</SideNavItem>
                </SideNavCat>
              </SideNavNav>
            </SideNav>
            <Navbar style={navStyle} dark expand="md">
              <NavbarNav left>
              <NavItem>
                    {button1}
              </NavItem>
                <NavItem className="d-none d-md-inline" style={{paddingTop: 5}}>
                    <strong>Material Design for Bootstrap</strong>
                </NavItem>
              </NavbarNav>
              <NavbarNav right style={specialCaseNavbarStyles}>
                <NavItem active>
                    <NavLink to="#!"><Fa icon="envelope" className="d-inline-inline"/>  <div className="d-none d-md-inline">Contact</div></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#!"><Fa icon="comments-o" className="d-inline-inline"/> <div className="d-none d-md-inline">Support</div></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#!"><Fa icon="user" className="d-inline-inline"/>  <div className="d-none d-md-inline">Account</div></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown >
                    <DropdownToggle nav caret> <div className="d-none d-md-inline">Dropdown</div></DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Navbar>
            <main style={mainStyle}>
              <Container fluid style={{height: 2000}} className="mt-5">
                <h2>Advanced Double Navigation with hidden SideNav & non-fixed Navbar:</h2><br/>
                <h5>1. Hidden side menu. Click "hamburger" icon in the top left corner to open it.</h5>
                <h5>2. Non-fixed Navbar. It will disappear when you scroll down.</h5>
              </Container>
            </main>
            </div>
        </Router>
    );
  }
};

export default SideNavPage;