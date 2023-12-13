import styled from "styled-components";
import theme from "../../../../../theme";
import Header from "./Header";
import BodyBasket from "./BodyBasket";
import FooterBasket from "./FooterBasket";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  const { basket} = useContext(OrderContext);
  const isBasketEmpty = basket.length === 0;
  return (
    <BasketStyled>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        {isBasketEmpty ? <BodyBasket /> : <BasketProducts   />}
      </div>
      <div className="footer">
      <FooterBasket />

      </div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${theme.shadows.basket};

  overflow-y: scroll;

  .header {
    background-color: black;
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 2px;
    text-align: left;
    color: #ffa01b;
    position: sticky;
    top:0;
  }
  .footer {
    font-family: Amatic SC;
    font-size: 20px;
    font-weight: 700;
    background-color: black;
    color: #ffffff;
    padding: 10px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom:0;
  }
`;
