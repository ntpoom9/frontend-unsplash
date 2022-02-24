import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../css/Menu.css";
// import "../css/font.css";
function Menu() {
  const [isOpen, setIsOPen] = useState(false);
  const toggle = () => setIsOPen(!isOpen);
  return (
    <>
      <Navbar className="navbar navbar-expand-md  fixed-top " expand="md">
        <NavbarBrand className="NavbarBrand" href="/">
          IO-Stagram
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
            <NavLink href="/">Product List</NavLink>
          </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Menu;
