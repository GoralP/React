import React, { useState } from 'react';
import panda from './images/panda2.jpg';
 

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,Button } from 'reactstrap';


const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="row navigation-bar">
      <div className="col-8">
        <div className="row">
          <img className="panda-image" src={panda} alt="panda image"/>
          <h3 className="mt-3 text-white">Panda</h3>
        </div>
      </div>

      <div className="col-3 mt-1 toggle-button">
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={toggleNavbar} className=" bg-secondary" />
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