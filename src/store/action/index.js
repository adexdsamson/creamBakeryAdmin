import {
  CLEARBLOG,
  CLEARCATEGORY,
  CLEARFEEDBACK,
  CLEARCHEF,
  CLEARREVIEW,
  CLEARRECIPE,
  CLEARORDER,
  LOGOUT,
  OPENRESPONSE,
  CLOSERESPONSE
} from './type';



export const clearBlog = () => dispatch => {
  dispatch({ type: CLEARBLOG, })
}

export const clearCategory = () => dispatch => {
  dispatch({ type: CLEARCATEGORY, })
}

export const showResponseBox = () => dispatch => {
  dispatch({ type: OPENRESPONSE, payload: true})
}

export const closeResponseBox = () => dispatch => {
  dispatch({ type: CLOSERESPONSE, payload: false })
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

export const logOut = () => dispatch => {
  dispatch({ type: LOGOUT})
}