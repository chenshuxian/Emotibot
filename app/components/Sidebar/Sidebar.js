import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'reactstrap';

import {
    MENU
} from '../../constants/menu';

import {
    NavItemHOC,
    NavItemNest
} from '../../common';

const Sidebar = ({
    miniSide,
    onOpen
}) => (
    <div className="sidebar">
    <nav className="sidebar-nav">
        <Nav vertical>
            {
               MENU.map(function(v,index){
                   if(typeof(v.sub) == "object"){
                       return <NavItemNest p={v} onOpen={onOpen} />
                   } 
                   return <NavItemHOC p={v} />
               })
            }
        </Nav>
    </nav>
    <button className="sidebar-minimizer brand-minimizer" type="button" onClick={miniSide}></button>
    </div>
);
      


export default Sidebar;