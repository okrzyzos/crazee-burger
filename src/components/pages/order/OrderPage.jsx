import React, { useState , useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Main from "./MainMenu/Main";
import theme from "../../../theme/index";
import OrderContext from "../../../context/OrderContext";

function OrderPage() {
  const [isAdminMode, setAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [menuData, setMenuData] = useState([]);

  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  const navigate = useNavigate();

  const addProductToMenu = (newProduct) => {
    setMenuData([...menuData, newProduct]);
  };


  const orderContextValue = {
    isAdminMode,
    setAdminMode,
    isCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    addProductToMenu,
    menuData,
    setMenuData
  }
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar  />
          <Main   />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
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
