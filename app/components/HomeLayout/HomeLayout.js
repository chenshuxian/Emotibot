import React from 'react';
import Header from '../../containers/Header';
import Sidebar from '../../containers/Sidebar';
import Breadcrumbs from '../Breadcrumbs';
import Intent from '../../containers/Intent';
import { BrowserRouter, Route } from 'react-router-dom'


const HomeLayout = ({
  children
}) =>  (  
    <div>
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main">
            <Breadcrumbs /> 
            <div className="container-fluid">
                <div className="animated fadeIn">
                  <Route path="/" exact component={Intent} />
                  <Route path="/intent"  component={Intent} />
                </div>
            </div>
        </main>
      </div>
    </div>
);
export default HomeLayout;