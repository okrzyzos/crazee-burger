import React from "react";
import styled from "styled-components";
import Profil from "./Profil";

function NavbarRightSide({ username }) {
  return (
    <>
      <NavbarRightSideStyled className="right-side">
        {/* <div className="admin-button">Admin button </div> */}

        <Profil username={username} />
      </NavbarRightSideStyled>
    </>
  );
}

const NavbarRightSideStyled = styled.div``;

export default NavbarRightSide;
