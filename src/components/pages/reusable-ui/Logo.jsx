import React from "react";
import styled from "styled-components";
import logo from "../../../assets/F03-logo-orange.png";
import theme from "../../../theme/index";


function Logo({ className, fontSize = "95px",onClick}) {
  return (
  <HeaderContainer onClick={onClick}>
    <HeaderText fontSize={fontSize}>Crazee</HeaderText>
    <LogoStyled src={logo} alt="Logo" className={className} />
    <HeaderText fontSize={fontSize}>Burger</HeaderText>
  </HeaderContainer>

);
}


const LogoStyled = styled.img`
  // Vous pouvez également spécifier d'autres propriétés CSS si nécessaire

  // Ajoutez la taille souhaitée pour votre logo ici
  width: 300px;
  height: auto;
  object-fit: contain;
  margin: 0;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;


const HeaderText = styled.div`
  color: ${theme.colors.white};
  font-size:${theme.fonts.size.P3};
  line-height: 1.2;
  text-transform: uppercase;
  font-family: "Amatic SC", cursive;
  color:${theme.colors.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  /* Ajoutez d'autres styles de texte ici */
`;
export default Logo;
