// Function Component ( with props and default props ):

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Burger from 'react-css-burger';
import AuthContext from '../store/auth-context';

const Header = (props) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const authCtx = useContext(AuthContext);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 501) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__logo'>LOGO</div>
        {/* <nav
        className={`header__nav ${
          isHamburgerActive ? "header__nav--open" : ""
        }`}
      > */}
        <ul
          className={`header__nav ${
            isHamburgerActive ? 'header__nav--open' : ''
          }`}
        >
          <li className=''>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-us'>About us</Link>
          </li>
          <li>
            <Link to='/about-us'>About us</Link>
          </li>
          {!authCtx.isLoggedIn && (
            <li>
              <Link to='/sign-in'>Sign In</Link>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li>
              <Link to='/sign-in'>Sign Up</Link>
            </li>
          )}
        </ul>
        {/* </nav> */}

        {/* burger menu */}
        {isMobile && (
          <Burger
            onClick={() => setIsHamburgerActive(!isHamburgerActive)}
            active={isHamburgerActive}
            burger='elastic'
            color='pink'
            hoverOpacity={0.8}
            scale={0.7}
            marginLeft={0}
            marginTop={0}
          />
        )}
        {/* burger menu end */}
      </div>
    </div>
  );
};
export default Header;
