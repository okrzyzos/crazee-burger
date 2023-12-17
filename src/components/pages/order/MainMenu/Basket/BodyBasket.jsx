import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { BASKET_MESSAGE } from "../../../../../enums/product";

function BodyBasket({ isLoading}) {

  

  const imgDefault = "/images/coming-soon.png";

  return (
    <BodyBasketStyled className="body">
      <span className="title-empty">{isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}</span>

    
    </BodyBasketStyled>
  );
}

const BodyBasketStyled = styled.div`

.title-empty{
  font-family: Amatic SC;
  font-size:25px;
  display: flex;
    justify-content: center;
    align-items: center;
    font-size:35px;
}


  }
`;

export default BodyBasket;
