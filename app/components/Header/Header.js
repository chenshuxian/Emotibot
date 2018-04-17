import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

const Header = ({
    showSide
}) => (
    <Navbar className="app-header" color="white" >
        <NavbarBrand href="/">Emotibot</NavbarBrand>
        <NavbarToggler className="sidebar-toggler d-md-down-none" onClick={showSide} />
        <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
                <NavLink href="#">Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
                <NavLink href="#">Users</NavLink>
            </NavItem>
            <NavItem className="px-3">
                <NavLink href="#">Settings</NavLink>
            </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="#"><i className="icon-bell" /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#"><i className="icon-list" /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#"><i className="icon-location-pin" /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" role="button" ria-haspopup="true" aria-expanded="false">
                    <i className="icon-user" />
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)
      
                  
   

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//             <Navbar className="app-header" color="white" >
//                 <NavbarBrand href="/">Emotibot</NavbarBrand>
//                 <NavbarToggler className="sidebar-toggler d-md-down-none" onClick={} />
//                 <Nav className="d-md-down-none" navbar>
//                     <NavItem className="px-3">
//                         <NavLink href="#">Dashboard</NavLink>
//                     </NavItem>
//                     <NavItem className="px-3">
//                         <NavLink href="#">Users</NavLink>
//                     </NavItem>
//                     <NavItem className="px-3">
//                         <NavLink href="#">Settings</NavLink>
//                     </NavItem>
//                 </Nav>
//                 <Nav className="ml-auto" navbar>
//                     <NavItem>
//                         <NavLink href="#"><i className="icon-bell" /></NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="#"><i className="icon-list" /></NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="#"><i className="icon-location-pin" /></NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="#" role="button" ria-haspopup="true" aria-expanded="false">
//                             <img className="img-avatar" src="img/avatars/6.jpg" />
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//             </Navbar>
//     );
//   }
// }

export default Header;