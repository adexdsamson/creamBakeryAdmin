import React from 'react';
import RecipeList from '../../components/Single-Cat';
import { connect } from 'react-redux';
import { DeleteRecipe } from '../../utilities/firebase';
import NoContent from '../../views/NoContent';


const mapStateToProps = state => ({ recipe: state.Recipe });
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  deleteRecipe: () =>  dispatch(DeleteRecipe(ownProps))
}}

const ConnectedList = ({recipe, deleteRecipe}) => {
  return(
  <div>
    {recipe.length ? <RecipeList views={recipe} click={() => deleteRecipe(recipe)}/>  : 
      <NoContent title="No Recipe availiable"/>
    }
  </div>
);}

const RecipeView = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default RecipeView;