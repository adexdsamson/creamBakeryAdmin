import React from 'react';
import ChefList from '../../components/chef';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const mapStateToProps = state => ({ chef: state.Chef });

const ConnectedList = ({chef}) => (
  <div>
    {chef.length ? <ChefList /> : 
      <Typography variant="h5">No Chef</Typography>
    }
  </div>
);

const ChefView = connect(mapStateToProps)(ConnectedList);

export default ChefView;