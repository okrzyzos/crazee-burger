import React, { useContext } from "react";

import styled from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "../MainMenu/MainRightSide/MainRightSide";
import OrderContext from "../../../../context/OrderContext";

import Basket from "./Basket/Basket";

export default function Main() {
  const { isAdminMode } = useContext(OrderContext);
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 1fr;
`;
