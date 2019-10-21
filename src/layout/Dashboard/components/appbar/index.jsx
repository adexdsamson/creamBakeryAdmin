import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import {IconButton, Toolbar, Typography} from '@material-ui/core';
import {PowerSettingsNew} from '@material-ui/icons';
import {Menu as MenuIcon, Close as CloseIcon} from '@material-ui/icons';

import style from './style';

class Appbar extends Component {
  state = {  }

  
  render() { 
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;

    const rootClassName = classNames(classes.root, className);
    return ( 
      <Fragment>
        <div className={rootClassName}>
          
            <Toolbar
              className={classes.toolbar}
              
            >
              <IconButton
                className={classes.menuButton}
                onClick={onToggleSidebar}
                variant='text'
              >
                {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Typography
                className={classes.title}
                variant='h4'
              >
                {title}
              </Typography>

              <div className={classes.toolbarButtons}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <PowerSettingsNew />
                  <span>
                    <Typography>LogOut</Typography>
                  </span>
                </IconButton>
              </div>
            </Toolbar>
          
        </div>
      </Fragment>
     );
  }
}

Appbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Appbar.defaultProps = {
  onToggleSidebar: () => {}
};
 
export default compose(withRouter, withStyles(style))(Appbar);