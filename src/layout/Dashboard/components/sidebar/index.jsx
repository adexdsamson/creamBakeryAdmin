import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Button,withStyles,Divider, Typography, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {
  DashboardOutlined as DashboardIcon,
  PostAddOutlined as BlogIcon,
  FastfoodOutlined as RecipeIcon,
  MailOutlined as MailIcon,
  PeopleOutline as ChefIcon,
  CommentOutlined as ReviewsIcon,
  ShoppingCart as ShoppingIcon
} from '@material-ui/icons';

import { MdPowerSettingsNew } from "react-icons/md";
import Avatar from '../../../../components/Avatar';
import Styles from './styles';

class SideBar extends Component {
  state = { view: [] }
  render() { 
    const {classes, className} = this.props;
    const rootClassName = classNames(classes.root, className);
    return ( 
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link to="/dashboard" className={classes.logoLink}>
            <Avatar />
            <Typography className='ml-3' variant='h3'> Cream Bakery</Typography>
          </Link>
        </div>

        <Divider className={classes.logoDivider}/>

        <List component='div' disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/dashboard'
          >
            <ListItemIcon className={classes.listItemIcon}>
             <DashboardIcon />
            </ListItemIcon>
            <ListItemText classes={classes.listItemText} primary='Dashboard'/>
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/order'
          >
            <ListItemIcon className={classes.listItemIcon}>
             <ShoppingIcon />
            </ListItemIcon>
            <ListItemText classes={classes.listItemText} primary='Order'/>
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/recipe'
          >
            <ListItemIcon className={classes.listItemIcon}>
              <RecipeIcon />
            </ListItemIcon>
            <ListItemText classes={classes.listItemText} primary='Recipe'/>
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/blog'
          >
            <ListItemIcon className={classes.listItemIcon}>
              <BlogIcon />
            </ListItemIcon>
            <ListItemText classes={classes.listItemText} primary='Blog'/>
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/review'
          >
            <ListItemIcon className={classes.listItemIcon}>
              <ReviewsIcon />
            </ListItemIcon>
            
            <ListItemText classes={ classes.listItemText} primary='Review'/>
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/chef'
          >
            <ListItemIcon className={classes.listItemIcon}>
              <ChefIcon /> 
            </ListItemIcon>
            <ListItemText classes={classes.listItemText} primary='Chef'/>
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to='/newsletter'
          >
            <ListItemIcon className={classes.listItemIcon}>
              <MailIcon /> 
            </ListItemIcon>
            <ListItemText classes={classes.listItemText} primary='Newsletter'/>
          </ListItem>

        </List>
        
      </nav>
    );
  }
}
 
SideBar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(SideBar);