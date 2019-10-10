import Avatar from '../Avatar';
//import { UserCard } from '../Cards';
//import Notification from '../Notification';
import SearchInput from '../searchInput';
//import withBadge from '../hoc/withBadge';
import React, {Component} from 'react';
import {
  MdClearAll,
} from 'react-icons/md';
import {
  Button,
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';
import bn from '../../utilities/bemnames';

const bem = bn.create('header');



class Header extends Component {
 
  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cb-sidebar').classList.toggle('cb-sidebar--open');
  };
  render() { 
    return ( 
      <Navbar expand className={bem.b('bg-white bg-gradient-announcement')}>
        <Nav navbar className="mr-2">
          <Button variant='' onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          <NavItem>
            <Nav.Link id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
 
export default Header;