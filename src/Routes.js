import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

//import PrivateRoute from './utilities/auth/privateRoute';

import Register from './views/register';
import Login from './views/signIn';
import DashboardPage from './views/Dashboard';
import OrderPage from './views/Order';
import FullOrderPage from './views/Order/fullOrder';
import BlogPage from './views/Blog';
import ReviewPage from './views/Review';
import RecipePage from './views/Recipe';
import ChefPage from './views/Chef';
import NewsPage from './views/newsletter';

import NotFound from './views/NotFound';



class Routes extends Component {
  
  render() {
    //console.log(this.props.user)
    return (
      <Switch>
        
        <Route component={Login} exact path='/' />
        <Route component={Register} exact path='/register'/>
        <Route 
          path='/dashboard'
          exact
          authed={this.props.user}
          component={DashboardPage}
          {...this.props}
        />

        <Route 
          path='/order'
          exact
          authed={this.props.user}
          component={OrderPage}
          {...this.props}
        />
        
        <Route 
          path='/blog'
          exact
          authed={this.props.user}
          component={BlogPage}
          {...this.props}
        />
        
        <Route 
          path='/orderlist/:id'
          exact
          authed={this.props.user}
          component={FullOrderPage}
          {...this.props}
        />
        
        <Route 
          path='/recipe'
          exact
          authed={this.props.user}
          component={RecipePage}
          {...this.props}
        />
    
        <Route 
          path='/review'
          exact
          authed={this.props.user}
          component={ReviewPage}
          {...this.props}
        />
        
        <Route 
          path='/chef'
          exact
          authed={this.props.user}
          component={ChefPage}
          {...this.props}
        />
        
        <Route 
          path='/newsletter'
          exact
          authed={this.props.user}
          component={NewsPage}
          {...this.props}
        />

        <Route component={NotFound} />
      </Switch>
    )
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};


export default connect(mapStateToProps)(Routes)