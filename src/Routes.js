import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './views/login';
import Login from './views/signIn';
import DashboardPage from './views/Dashboard';
import OrderPage from './views/Order';
import FullOrderPage from './views/Order/fullOrder';
import BlogPage from './views/Blog';
import ReviewPage from './views/Review';
import RecipePage from './views/Recipe';
import ChefPage from './views/Chef';
import NewsPage from './views/newsletter';




export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Register} exact path='/register'/>
        <Route component={DashboardPage} exact path='/dashboard'/>
        <Route component={OrderPage} exact path='/order' />
        <Route component={BlogPage} exact path='/blog' />
        <Route component={FullOrderPage} exact path='/orderlist/i:d' />
        <Route component={RecipePage} exact path='/recipe' />
        <Route component={ReviewPage} exact path='/review' />
        <Route component={ChefPage} exact path='/chef' />
        <Route component={NewsPage} exact path='/newsletter' />
      </Switch>
    )
  }
}