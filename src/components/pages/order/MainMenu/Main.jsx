import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import theme from "../../../../theme/index";
import MenuProduct from "./MenuProduct";
import { fakeMenu1, fakeMenu2 } from "../../../../api/Data";
import Admin from "./admin/Admin";
import OrderContext from "../../../../context/OrderContext";

function Main() {
  const [menuData, setMenuData] = useState([]);
  const { isAdminMode, setAdminMode } = useContext(OrderContext);

  useEffect(() => {
    // Simulate fetching data with a timeout
    const fetchData = () => {
      // Simulating an API call with a delay
      setTimeout(() => {
        // Combine your fake menu data
        const combinedMenu = [...fakeMenu1, ...fakeMenu2];
        setMenuData(combinedMenu);
      }, 500); // Delay in milliseconds
    };

    fetchData();
  }, []);

  return (
    <MainStyled className="main">
      <div className="basket"></div>
      <div className="menu-admin">
        <MenuProduct menu={menuData} />
        {isAdminMode && <Admin />}
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  flex: 1;
  display: grid;
  // grid-template-columns: 25% 1fr;
  grid-template-columns: 1fr;
  // .basket {
  //   background-color: pink;
  // }

  .menu-admin {
    position: relative;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    overflow-y: hidden;
    display: grid;
  }
`;

export default Main;
