import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'></div>
      </Link>
      <div className='upload-container'>
        <div className='section'>
          <Link to='/upload'>
            <div className='upload' />
          </Link>
          <img
            className='personal'
            src='https://pbs.twimg.com/profile_images/1155140361213349888/LOGLJdUu.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
