import React, { useContext, useState } from "react";
import styled from "styled-components";
import Profil from "./Profil";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ToggleButton from "../../reusable-ui/ToggleButton";
import OrderContext from "../../../../context/OrderContext";

function NavbarRightSide() {

  const { isAdminMode, setAdminMode } = useContext(OrderContext);

  const handleToggle = () => {
    setAdminMode(!isAdminMode);
    toast.info(
      ` ${isAdminMode ? " mode admin désactivé " : "mode admin activé"} !`
    );
  };
  return (
    <>
      <NavbarRightSideStyled className="right-side">
        <div className="admin-button">
          <ToggleButton
            isChecked={isAdminMode}
            onToggle={handleToggle}
            labelIfChecked="Désactiver le mode admin"
            labelIfUnchecked="Activer le mode admin"
          />
        </div>

        <Profil />
      </NavbarRightSideStyled>
    </>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .admin-button {
    padding-right: 50px;
  }

  button {
    padding:10px;
    border-radius:10px;
    outlined:none;
    border;none ;
  }

  
`;

export default NavbarRightSide;
