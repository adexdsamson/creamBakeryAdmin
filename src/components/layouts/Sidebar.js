import React, {Component} from 'react';
import {
 // MdExtension,
 /// MdKeyboardArrowDown,
 // MdPages,
 // MdSend,
} from 'react-icons/md';
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import {
  NavLink
} from 'react-router-dom';
import {
  Nav,
  //Collapse,
  Navbar,
  NavItem
} from 'react-bootstrap';
import bn from '../../utilities/bemnames';
import {
  navItems,
  //navComponents,
  //pageContents,
  //navContents
} from '../../variables';

const bem = bn.create('sidebar');

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


class Sidebar extends Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };


  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() { 
    return ( 
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <Navbar.Text>Cream Bakery</Navbar.Text>
          </Navbar>
          <Nav className='flex-column'>
            {navItems.map(({ to, name, exact, Icon, id}) => (
              <NavItem key={id} className={bem.e('nav-item')}>
                <NavLink
                  id={`navItem-${name}`}
                  className="text-uppercase nav nav-link mt-1"
                  tag={Nav.Link}
                  to={to}
                  activeclassname="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </NavLink>
              </NavItem>
            ))}
 
          </Nav>
        </div>
      </aside>
    );
  }
}
 
export default Sidebar;