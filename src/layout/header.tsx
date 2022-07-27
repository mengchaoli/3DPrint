// Function Component ( with props and default props ):

import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div>
      LOGO
      <nav>
        {props.head}
        <ul>
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
/* Initializing DefaultProps constant to defaultProps 
so that this constant works. */

Header.defaultProps = DefaultProps;
export default Header;
