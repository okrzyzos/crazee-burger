import React from "react";
import styled from 'styled-components';


function MenuEmpty() {
  return (
    <MenuEmptyStyled>
      <p>Victime de son succès :D!</p>
      <br />
      <p>De nouvelles recettes sont en cours de préparation!</p>
      <br />
      <p>A très vite !</p>
    </MenuEmptyStyled>
  );
}


const MenuEmptyStyled  = styled.div`
  
font-family: Amatic SC;
font-size: 36px;
font-weight: 700;
line-height: 45px;
letter-spacing: 0em;
text-align: center;
margin-top: 200px;

`;


export default MenuEmpty;
