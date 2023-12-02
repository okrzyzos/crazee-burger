import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Main from "./MainMenu/Main";
import theme from "../../../theme/index";

function OrderPage() {
  const { firstName } = useParams();
  const navigate = useNavigate();
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={firstName} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: #f5f5f7;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;