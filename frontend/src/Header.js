import React from "react";
import { Link } from "react-router-dom";
import styled from "react-emotion";

const HeaderContainer = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  font-size: calc(10px + 2vmin);
  color: white;

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 0.5rem 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

function Header(props) {
  console.log(props);
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>DRF News</h1>
      </Link>

      <nav>
        {!props.username ? (
          <ul>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/item/new">(+)</Link>
            </li>
          </ul>
        )}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
