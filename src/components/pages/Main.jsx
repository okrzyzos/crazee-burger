import React from 'react'
import styled from 'styled-components';
import theme from "../../theme/index";



function Main() {
  return (
    <MainStyled className="main">
  </MainStyled>
  )
}
const MainStyled  = styled.div`

border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    flex: 1;
`;



export default Main


