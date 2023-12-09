import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Admin from "../../MainMenu/MainRightSide/admin/Admin";
import Menu from "./Menu/Menu";

export default function MainRightSide() {
  const { isAdminMode } = useContext(OrderContext);

  return (
    <MainRightSideStyled>
      <Menu />
      {isAdminMode && <Admin />}
    </MainRightSideStyled>
  );
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
