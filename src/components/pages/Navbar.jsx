import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../components/pages/reusable-ui/Logo";
import { refresh } from "../../utils/window";

function Navbar({ username }) {
  return (
    <NavbarStyled>
        <Logo size="100px" fontSize="55px" className="logo" onClick={refresh} />

      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: white;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 30px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px 15px 1px 1px;

 
  
`;

export default Navbar;
