


import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import "./Header";

import logo from '../../assets/logo.png';
  
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeRoute = route => {
    this.props.history.push(route);
  };
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <img src={logo} className="logo-img" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="c-pointer" onClick={() => { this.changeRoute('/') }}>
                <NavLink>Devices</NavLink>
              </NavItem>
              <NavItem className="c-pointer" onClick={() => { this.changeRoute('/form') }}>
                <NavLink>Discovered Devices</NavLink>
              </NavItem>
              <NavItem className="c-pointer" onClick={() => { this.changeRoute('/user') }}>
                <NavLink>Undiscovered Devices</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
