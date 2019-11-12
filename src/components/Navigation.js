import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className='App'>
        <h1>React Router Mini</h1>
        <div>
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div>
          <NavLink exact to={'/about'}>
            About
          </NavLink>
        </div>
        <div>
          <NavLink exact to={'/contact'}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
