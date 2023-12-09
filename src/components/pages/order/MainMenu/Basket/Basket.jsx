import styled from "styled-components";
import theme from "../../../../../theme";
import Header from "./Header";
import BodyBasket from "./BodyBasket";
import FooterBasket from "./FooterBasket";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
         <Header />
      </div>
     <BodyBasket />
     <FooterBasket />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${theme.shadows.basket};

  .header {
    background-color: black;
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 2px;
    text-align: left;
    color: #ffa01b;

  
  }
  .footer {
    font-family: Amatic SC;
    font-size: 20px;
    font-weight: 700;
    background-color: black;
    color: #ffffff;
    height: 70px;
    padding: 10px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .body {
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;
    color: #747b91;
  }
`;
