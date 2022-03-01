import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Profile from "../image/Profile.jpg";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 13px;
`;
const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
`;
const RighttLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
  }
`;
const Navlinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;

  svg {
    height: 24px;
    width: 24px;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <LeftLinks>
        <Navlinks to='/about'>About</Navlinks>
        <Navlinks to='/store'>Store</Navlinks>
      </LeftLinks>
      <RighttLinks>
        <Navlinks to='/gmail'>Gmail</Navlinks>
        <Navlinks to='/images'>Images</Navlinks>
        <Navlinks
          to='/'
          css={`
            padding-right: 20px;
          `}
        >
          <svg focusable='false' viewBox='0 0 24 24'>
            <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
          </svg>
        </Navlinks>
        <Link to='/'>
          <img src={Profile} alt='profile' />
        </Link>
      </RighttLinks>
    </Nav>
  );
};
