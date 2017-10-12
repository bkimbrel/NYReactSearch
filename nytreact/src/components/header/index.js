import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className='jumbotron' style={{ textAlign: 'center'}}>
        <p>New York Times (fancy!)</p>
          <NavLink to='/' style={{ padding: 10}}>
            search
          </NavLink>
          <NavLink to='/savedarticles'>
            saved
          </NavLink>

      </div>
    );
  }
}

export default Header;
