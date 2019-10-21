import React, { Component, Fragment } from 'react';

import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';


import { withStyles, withWidth } from '@material-ui/core';

import { Drawer } from '@material-ui/core';

import { Sidebar, Appbar, Subbar} from './components';


import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const isMobile = ['xs', 'sm', 'md'].includes(props.width);
    this.state = {
      isOpen: !isMobile
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() { 
    const { classes, width, title, children, icon, subtitle} = this.props;
    const { isOpen } = this.state;

    const isMobile = ['xs', 'sm', 'md'].includes(width);
    const shiftAppbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return ( 
      <Fragment>
        <Appbar 
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftAppbar
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
        />
        <Drawer 
          anchor='left'
          classes={{paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? 'temporary' : 'persistent'}
        >
          <Sidebar classNam={classes.sidebar} />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
        >
          <Subbar appIcon={icon} title={title} subtitle={subtitle} />
          {children}
        </main>
      </Fragment>
     );
  }
}

Dashboard.protoTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

 
export default compose(withStyles(styles), withWidth())(Dashboard);