import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";

function BodyBasket({ basket }) {

  const imgDefault = "/images/coming-soon.png";

  return (
    <BodyBasketStyled className="body">
      <span className="title-empty">Votre commande est vide</span>

    
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
