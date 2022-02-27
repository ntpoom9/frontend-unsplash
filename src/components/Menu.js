import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import "../css/Menu.css";

export default function Menu() {
  const [isOpen, setIsOPen] = useState(false);
  //สำหรับ responsive
  const toggle = () => setIsOPen(!isOpen);
  return (
    <>
      <Navbar className="navbar navbar-expand-md  fixed-top " expand="md">
        <NavbarBrand className="NavbarBrand" href="/">
          Unstagram
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
