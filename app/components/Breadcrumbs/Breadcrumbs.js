import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
  }
  toggle() {
      this.setState({
          isOpen: ! this.state.isOpen
      })
  }
  render() {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>意图引擎</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
  }
}

export default Breadcrumbs;