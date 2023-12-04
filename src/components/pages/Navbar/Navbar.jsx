import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../reusable-ui/Logo";
import { refresh } from "../../../utils/window";
import theme from "../../../theme/index";


function Navbar() {
  return (
    <NavbarStyled>
      <Logo  fontSize="55px" className="logo" onClick={refresh} />

      <NavbarRightSide  />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: #ffffff;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px 15px 1px 1px;
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo {
   width: 100px;
  }
`;

export default Navbar;
