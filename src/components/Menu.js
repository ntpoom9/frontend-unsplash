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

function Menu() {
  const [isOpen, setIsOPen] = useState(false);
  const toggle = () => setIsOPen(!isOpen);
  return (
    <Navbar
      className="navbar navbar-expand-md navbar-dark fixed-top bg-dark "
      expand="md"
    >
      <NavbarBrand href="/">IO-Stagram</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {/* <NavItem>
            <NavLink href="/">Product List</NavLink>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;
