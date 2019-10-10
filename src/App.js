import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import GAListener from './components/GAListener';
import { query } from './constant';
import PageSpinner from './components/pageSpinner';
import componentQueries from 'react-component-queries';
import { MainLayout } from './components/layouts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/reduction.scss';
import Login from './views/login';


//const DashboardPage = React.lazy(() => import('./views/dashboard.jsx'));
const OrderPage = React.lazy(() => import('./views/orderList.jsx'));
const FullDetails = React.lazy(() => import('./views/fullOrder.jsx'));


class App extends Component {
  state = {
    breakpoint: 'xm'
  }
  render() {
    return (
      <Router>
        <GAListener>
          <Switch>
            <Route
              exact
              path='/'
              component={ Login }
            />
            <Route
              exact
              path='/register'
              component={ Login }
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route
                  exact
                  path="/orderlist"
                  component = { OrderPage }
                />
                 <Route
                  exact
                  path="/orderlist/:id"
                  component = { FullDetails }
                />
              </React.Suspense>
            </MainLayout>
          </Switch>
        </GAListener>
      </Router>
    );
  }
}




export default componentQueries(query)(App);
