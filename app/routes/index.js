import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import HomeLayout from '../components/HomeLayout';
import Home from '../components/Home';

export default (
  <div>
  <Route path='/' exact component={HomeLayout}></Route>
  <Route path="/home" component={Home}  />
  </div>
);
