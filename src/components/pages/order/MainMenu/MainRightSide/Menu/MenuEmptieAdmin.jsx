import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

function MenuEmptieAdmin({ onReset }) {
  return (
    <MenuEmptieAdminStyled className="regenerate-container">
      <h2>LE MENU EST VIDE ?</h2>
      <br />
      <h4>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</h4>
      <br />
      <br />
      <PrimaryButton
        label="Générer de nouveaux produits"
        className="button"
        onClick={onReset}
      ></PrimaryButton>
    </MenuEmptieAdminStyled>
  );
}

const MenuEmptieAdminStyled = styled.div`

font-family: Amatic SC;
font-size: 36px;
font-weight: 700;
line-height: 45px;
letter-spacing: 0em;
text-align: center;
margin-top: 200px;

.button {
width: 300px;
}

`;

export default MenuEmptieAdmin;
