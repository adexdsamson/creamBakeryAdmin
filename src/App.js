import React, {Component, Suspense} from 'react';
import GAListener from './components/GAListener';
import PageSpinner from './components/pageSpinner';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

const browserHistory = createBrowserHistory();



class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Suspense fallback={<PageSpinner />}>
            <GAListener>
              <Routes />
            </GAListener>
          </Suspense>
        </Router>
      </ThemeProvider>
    );
  }
}




export default App;
