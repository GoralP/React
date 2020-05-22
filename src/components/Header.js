import React, { useState } from 'react';
import panda from './images/panda.png';
 

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="row mx-2 navigation-bar">
        <div className="col-md-9">
            <div className="row">
            <img className="panda-image" src={panda} alt="panda image"/>
            <h3 className="mt-3">Panda</h3>
            </div>
        </div>
      <div className="col-md-3 ">
        <Navbar color="faded" light expand="md">
            {/* <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand> */}
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <NavLink href=""><Button>Log in</Button></NavLink>
                </NavItem>
                <NavItem>
                <NavLink href=""><Button>Sign UP</Button></NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;