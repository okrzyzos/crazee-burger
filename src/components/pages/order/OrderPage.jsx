import React, { useState, useContext,useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../pages/order/Navbar/Navbar";
import Main from "./MainMenu/Main";
import theme from "../../../theme/index";
import OrderContext from "../../../context/OrderContext";
import EMPTY_PRODUCT from "../../../enums/product";

import UseMenu from "../../../hooks/UseMenu";


function OrderPage() {
  const [isAdminMode, setAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [productSelected, setProductSelected] = useState({ EMPTY_PRODUCT });
  const titleEditRef = useRef()

  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const navigate = useNavigate();

  const {handleEdit, handleDelete,resetMenu,addProductToMenu,menuData,setMenuData} = UseMenu()
  const orderContextValue = {
    isAdminMode,
    setAdminMode,
    isCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    addProductToMenu,
    menuData,
    setMenuData,
    handleEdit,
    resetMenu,
    handleDelete,
    productSelected,
    setProductSelected,
    titleEditRef
  };
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
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
