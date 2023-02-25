import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1>Ask Me</h1>
        <NavMenu>
          {/* menu bar
          eg: bottom "Sign Up / Log In" will be the bar name and the above will be the link after clicking the button */}
          
          <NavLink to="/sign-up" activeStyle>
            Sign Up / Log In
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
