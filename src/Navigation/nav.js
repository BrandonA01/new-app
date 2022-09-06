import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../index.css';

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
  function Dropdown(props){
    return(
      <li className="dropdown">
        <a className="dropbtn">Apps</a>
        <div className="dropdown-content">
          <a href="TicTacToe">TicTacToe</a>
          <a href="Clock">Clock</a>
        </div>
      </li>
    )
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
    renderDropDown(str){
      return(
        <Dropdown value="str"/>
      )
    }
    render(){
      return(
        <nav data-testid="nav-1" id='navbar'>
          <ul>
            <li>{this.renderNavItem('Home')}</li>
            <li>{this.renderNavItem('Contact')}</li>
            <li>{this.renderNavItem('About')}</li>
            {this.renderDropDown('Apps')}
            <li>{this.renderTitle('My Porfolio')}</li>
          </ul>
        </nav>
      );
    }
  }

  export default Navbar;