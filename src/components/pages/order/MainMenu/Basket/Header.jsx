import React from "react";
import styled from 'styled-components';


function Header() {
  return (
    <HeaderStyled>
      <span className="text-total">Total </span>
      <span className="text-total">0,00€ </span>
    </HeaderStyled>
  );
}


const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;


export default Header;
