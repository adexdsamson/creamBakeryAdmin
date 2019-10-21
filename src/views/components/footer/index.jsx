import React, { Component } from 'react';

import {withStyles} from '@material-ui/core';
import { Divider, Typography} from '@material-ui/core';

import style from './styles';

class Footer extends Component {
  state = {  }
  render() { 
    const { classes} = this.props;

    return ( 
      <div className=''>
        <Divider />
        <Typography
          className={classes.company}
          variant='body1'
        >
          &copy: Cream Bakery 2019
        </Typography>
        <Typography variant='caption'>
          <img
            alt='logo'
            className={classes.logoImage}
            src='/images/icons/icon-72x72.png'
          />

        </Typography>
      </div>
     );
  }
}
 
export default withStyles(style)(Footer);