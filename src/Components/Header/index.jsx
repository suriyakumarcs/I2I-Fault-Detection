import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import "./Header";

class Header extends Component {
  render() {
    return (
      <div className="ui-header">
        <Navbar expand="md">
          <NavbarBrand href="/">IM</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
