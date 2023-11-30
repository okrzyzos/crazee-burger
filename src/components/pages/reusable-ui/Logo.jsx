import React from "react";
import styled from "styled-components";
import logo from "../../../assets/F03-logo-orange.png";

function Logo() {
  return <LogoStyled src={logo} alt="Logo" />;
}

const LogoStyled = styled.img`
  // Vous pouvez également spécifier d'autres propriétés CSS si nécessaire

  margin: 0 30px;
  // Ajoutez la taille souhaitée pour votre logo ici
  width: 300px; // Par exemple pour une largeur de 100px
  object-fit: contain;
`;

export default Logo;
