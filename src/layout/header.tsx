// Function Component ( with props and default props ):

import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

type Props = {
  linkFirst: string;
  routeFirst: string;
  head?: string;
  linkSecond?: string;
  routeSecond?: string;
};
/* Default props appear when no value for the prop 
is present when component is being called */

const DefaultProps = {
  head: "Navbar Head not found",
};

const Header: React.FC<Props> = (props) => {
  const showSettings = (event) => {
    event.preventDefault();
  };
  return (
    <div className="header">
      {/* <div className="header__logo">LOGO</div> */}
      {/* burger menu */}
      <Menu width={140} noOverlay>
        <Link to="/">Home</Link>
        <Link to="/">About us</Link>
        <Link to="/">Services</Link>
        <Link to="/">Sign up</Link>
      </Menu>
      {/* burger menu end */}
      {/* <nav className="header__nav">
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
/* Initializing DefaultProps constant to defaultProps 
so that this constant works. */

Header.defaultProps = DefaultProps;
export default Header;
