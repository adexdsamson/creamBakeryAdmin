import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import {APP} from '../Routes';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed 
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

export default PrivateRoute;