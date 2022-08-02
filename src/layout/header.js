// Function Component ( with props and default props ):

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "react-css-burger";

const Header = (props) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      {/* burger menu */}
      <Burger
        onClick={() => setIsHamburgerActive(!isHamburgerActive)}
        active={isHamburgerActive}
        burger="elastic"
        color="pink"
        hoverOpacity={0.8}
        scale={0.7}
        marginLeft={0}
        marginTop={0}
      />
      {/* burger menu end */}
      <nav
        className={`header__nav ${
          isHamburgerActive ? "header__nav--open" : ""
        }`}
      >
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
