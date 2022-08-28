import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavbarWrapper = styled.div``;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper data-testid="NavbarWrapper">
      <nav>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>

        <Authenticator>
          {({ signOut, user }) => (
            <div className="App">
              <p>
                Hey {user && user.username}, welcome to my channel, with auth!
              </p>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
