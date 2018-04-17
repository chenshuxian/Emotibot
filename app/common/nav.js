import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
    
const doActive = () => {   
    var nav = document.querySelectorAll(".active")[0];
        if (nav){
            document.querySelectorAll(".active")[0].className = "nav-link";
        }
        event.target.className = "active nav-link"; 
}

// props: href, icon, name, clickFn
export const NavItemHOC = (props) => (
    <NavItem>
        <NavLink className={props.p.class} href={props.p.href} onClick={doActive}>
        <i className={"nav-icon "+ props.p.icon}></i>{props.p.name}
        </NavLink>
    </NavItem>
)

export const NavItemNest = (props) => (
    <NavItem className="nav-dropdown">
        <NavLink className="nav-dropdown-toggle" href={props.p.href} onClick={props.onOpen}>
        <i className={"nav-icon " + props.p.icon}></i>{props.p.name}
        </NavLink>
        <Nav className="nav-dropdown-items">
            {props.p.sub.map((v,index) => {
                return <NavItemHOC p={v} />
            })}
        </Nav>
    </NavItem>
)

export const sideBarControl = (props) => {
    var root = document.querySelector('body').classList,
        value = root.value,
        classArray = props.class;
    if (value.indexOf(props.index) == "-1"){
        for ( var i = 0; i < classArray.length ; i++ ){
            root.add(classArray[i]);
        }
    } else {
        for ( var i = 0; i < classArray.length ; i++ ){
            root.remove(classArray[i]);
        }
    }
}