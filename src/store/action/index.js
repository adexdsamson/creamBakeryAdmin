import {
  FETCH_USER,
  CLEARBLOG,
  CLEARCATEGORY,
  CLEARFEEDBACK,
  CLEARCHEF,
  CLEARREVIEW,
  CLEARRECIPE,
  CLEARORDER
} from './type';



export const clearBlog = () => dispatch => {
  dispatch({ type: CLEARBLOG, })
}

export const clearCategory = () => dispatch => {
  dispatch({ type: CLEARCATEGORY, })
}

export const clearFeedback = () => dispatch => {
  dispatch({ type: CLEARFEEDBACK, })
}

export const clearRecipe = () => dispatch => {
  dispatch({ type: CLEARRECIPE, })
}

export const clearReview = () => dispatch => {
  dispatch({ type: CLEARREVIEW, })
}
export const clearChef = () => dispatch => {
  dispatch({ type: CLEARCHEF, })
}

export const clearOrder = () => dispatch => {
  dispatch({ type: CLEARORDER, })
}

export const dispatchAllOrder = () => async dispatch => {

 
}

export const fetchUser = () => async dispatch => {
  // feetch user's auth change state
 
  //console.log("auth res",res);
  dispatch({
    type: FETCH_USER,
    //payload: 
  });
};