import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from '../../layout';

import { Widget as Card } from "../../components/Cards";

import {
  DashboardOutlined as DashboardIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  state = {  }
  render() { 
    const { classes } = this.props;

    return ( 
      <DashboardLayout title='Analytics Dashboard' subtitle icon={<DashboardIcon />}>
        <div className={classes.root}>
          <Grid container spacing={4}>

            <Grid item md={4} sm={6}>
              <Card 
                name='Total Order'
                subname='Last year expense'
                value='1263'
                className="card mb-3 widget-content"
              />
            </Grid>

            <Grid item md={4} sm={6}>
              <Card 
                name='Newsletter subscribers'
                subname='Last year subscribers'
                value='1263'
                color='bg-grow-early'
                className="card mb-3 widget-content"
              />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
     );
  }
}

Dashboard.protoTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(Dashboard);