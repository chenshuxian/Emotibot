import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from '../app/routes';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import configureStore from '../app/store/configureStore';
import HomeLayout from '../app/containers/HomeLayout';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/flag-icon-css/css/flag-icon.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/simple-line-icons/css/simple-line-icons.css';
import '../app/css/style.css';

const store = configureStore;

ReactDOM.render( 
  <Provider store={store}>
    <Router>
      <HomeLayout />
    </Router>
  </Provider>, 
  document.getElementById('app')
);