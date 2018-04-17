import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    };
  }
  render() {
    return (
        <div>
            <h1> Hello World ! </h1>
        </div>
    );
  }
}

export default Home;