import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

function NavItem(props){
    return (
      <a href={props.value} className="custom-nav-item">
        {props.value}
      </a>
    );
  }
  
  function Title(props){
    return(
      <a id='page-title'>
        {props.value}
      </a>
    );
  }
  
  class Navbar extends React.Component{
    renderNavItem(str) {
      return (
        <NavItem
          value={str}
        />
      );
    }
    renderTitle(str) {
      return (
        <Title
          value={str}
        />
      );
    }
    render(){
      return(
        <nav id='navbar'>
          <ul>
            <li>{this.renderNavItem('Home')}</li>
            <li>{this.renderNavItem('Contact')}</li>
            <li>{this.renderNavItem('About')}</li>
            <li>{this.renderNavItem('Game')}</li>
            <li>{this.renderTitle('Testing Page')}</li>
          </ul>
        </nav>
      );
    }
  }

  export default Navbar;