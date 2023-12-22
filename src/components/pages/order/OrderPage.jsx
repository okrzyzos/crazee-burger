import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../pages/order/Navbar/Navbar";
import Main from "./MainMenu/Main";
import theme from "../../../theme/index";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PR0DUCT } from "../../../enums/product";
import { findObjectById } from "../../../utils/array";
import { getMenu } from "../../../api/Product";

import UseMenu from "../../../hooks/UseMenu";
import UseBasket from "../../../hooks/UseBasket";
import { initializeUserSession } from "./helpers/initializeUserSession";

function OrderPage() {
  const [isAdminMode, setAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [productSelected, setProductSelected] = useState({ EMPTY_PR0DUCT });
  const [newProduct,setNewProduct] = useState({ EMPTY_PR0DUCT });
  const titleEditRef = useRef();

  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const navigate = useNavigate();

  const {
    handleEdit,
    handleDelete,
    resetMenu,
    handleAdd,
    menuData,
    setMenuData,
  } = UseMenu();
  const {
    basket,
    handleAddToBasket,
    setBasket,
    calculateTotal,
    handleDeleteBasket,
    removeProductFromMenuAndBasket,
  } = UseBasket();
  const { username } = useParams();

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menuData);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  useEffect(() => {
    initializeUserSession(username, setMenuData, setBasket);
  }, []);

  const orderContextValue = {
    isAdminMode,
    setAdminMode,
    isCollapsed,
    username,
    currentTabSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    menuData,
    setMenuData,
    handleEdit,
    resetMenu,
    handleDelete,
    handleAdd,
    productSelected,
    newProduct,
    setNewProduct,
    setProductSelected,
    removeProductFromMenuAndBasket,
    titleEditRef,
    calculateTotal,
    handleDeleteBasket,
    basket,
    handleAddToBasket,
    handleProductSelected,
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
