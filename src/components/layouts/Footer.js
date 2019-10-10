import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import CreatorLink from '../CreatorLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar className='bg-gradient-announcement aa-footer pl-5'>
        <NavItem>
          2019 Cream Bakery, created by <CreatorLink>
            Deola Adediran</CreatorLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
