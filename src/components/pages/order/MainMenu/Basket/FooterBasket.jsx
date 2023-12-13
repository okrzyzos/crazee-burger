import React from 'react'
import styled from 'styled-components';
import theme from '../../../../../theme';


function FooterBasket() {
  return (
    <FooterBasketStyled>Codé avec ❤️ et React.JS</FooterBasketStyled>
  )
}


const FooterBasketStyled = styled.div`
 height:70px;
 display:flex;
 justify-content:center;
 align-items:center;
`;


export default FooterBasket