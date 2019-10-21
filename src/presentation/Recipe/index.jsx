import React from 'react';
import RecipeList from '../../components/Single-Cat';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';


const mapStateToProps = state => ({ recipe: state.Recipe });

const ConnectedList = ({recipe}) => (
  <div>
    {recipe.length ? <RecipeList views={recipe}/> : 
      <Typography variant="h5">No Recipe </Typography>
    }
  </div>
);

const RecipeView = connect(mapStateToProps)(ConnectedList);

export default RecipeView;